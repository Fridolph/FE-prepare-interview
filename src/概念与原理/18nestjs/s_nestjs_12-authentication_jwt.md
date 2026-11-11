# 认证、授权与 JWT

> 从“用户如何证明身份”开始，理解 Session、JWT、OAuth 的关系，再串起 NestJS 的登录、Token 验证、权限判断与退出流程。本文是概念与设计笔记，代码片段不代表本站已实现认证服务。

## 一、先区分认证与授权

- **认证（Authentication）**：确认“你是谁”，例如校验密码、验证登录凭证。
- **授权（Authorization）**：判断“你能做什么”，例如管理员能否禁用用户、当前用户能否修改这份草稿。

中文讨论中“鉴权”有时泛指两者，设计接口时最好明确区分。JWT 通过验证，只说明凭证满足验证规则，不代表用户可以访问所有资源。

身份凭证、签名算法和 HTTPS 也处于不同层次：凭证用于证明身份或权限，签名用于验证完整性与来源，HTTPS 用于保护传输过程。

## 二、常见方案如何比较？

Session、JWT 和 OAuth 并不是三个完全同层的替代选项：**Session 是会话机制，JWT 是一种 Token 格式，OAuth 2.0 是委托授权框架。** OAuth 的访问令牌可以采用 JWT，也可以是不透明字符串。

| 方案 | 工作方式 | 优势 | 需要处理的问题 |
| --- | --- | --- | --- |
| Session + Cookie | 服务端保存会话，浏览器通常通过 Cookie 携带 sessionId | 容易主动失效、集中管理会话，适合同站 Web 应用 | 多实例需要共享会话存储或其他协调方案；Cookie 自动携带时要考虑 CSRF |
| JWT | 客户端携带 Token，服务端按约定验证签名及声明 | 可供多个服务本地验签，适合 API、移动端等场景 | 即时撤销、权限变更、密钥轮换与刷新设计更复杂；令牌体积要受控 |
| OAuth 2.0 | 用户授权第三方应用获取限定范围的访问能力 | 避免把用户密码交给第三方，可限定 scope 与授权期限 | 需要授权服务器及完整的回调、令牌与客户端安全设计 |

### Session / Cookie 的几个误区

Cookie 是浏览器存储和发送数据的机制，Session 是服务端会话机制。Cookie 可以放 sessionId，也可以放 Token，二者不能画等号。

Session 并非天然“安全性低、性能低”：共享 Redis 等存储是常见多实例方案，实际性能取决于存储、网络与负载。安全性则取决于随机会话标识、过期与轮换策略，以及 Cookie 的 `HttpOnly`、`Secure`、`SameSite` 等设置。移动客户端也能使用会话机制，只是 Cookie 管理和跨站部署需要额外考虑。

### OAuth 与“第三方登录”

OAuth 2.0 主要解决授权，例如允许一个应用读取用户在另一平台上的资料。标准化身份认证通常由构建在 OAuth 2.0 之上的 **OpenID Connect（OIDC）**提供，通过 ID Token 等机制表达身份。ID Token 与调用业务 API 的 Access Token 用途不同，不能随意混用。

现代客户端常采用**授权码流程 + PKCE**。PKCE 保护授权码交换；重定向地址校验、按协议绑定请求与回调的防 CSRF 措施，以及 OIDC 的 nonce 校验也需要正确实现。不要把客户端密钥放进浏览器应用。

## 三、JWT 的结构与签名

JWT 全称 **JSON Web Token**。常见的签名型 JWT 使用 JWS 紧凑格式，由三段组成：

```text
Base64URL(Header).Base64URL(Payload).Signature
```

| 部分 | 内容 | 注意点 |
| --- | --- | --- |
| Header | 签名算法 `alg`、类型 `typ`，可能包含密钥标识 `kid` | 来自不可信输入，服务端必须限定允许的算法与密钥来源 |
| Payload | 用户标识、发行方、过期时间等声明（claims） | 通常只是编码，可被读取；不要放密码、密钥等敏感信息 |
| Signature | 对编码后的 Header 与 Payload 进行签名或 MAC | 用于验证内容是否被篡改，以及是否由持有可信密钥的一方生成 |

示例载荷：

```json
{
  "sub": "user_123",
  "iss": "learning-api",
  "aud": "learning-web",
  "iat": 1730000000,
  "exp": 1730000900,
  "jti": "unique-token-id",
  "token_use": "access"
}
```

- `sub`：主体标识，通常是用户 ID。
- `iss` / `aud`：发行方和预期接收方，防止令牌被错误的服务接受。
- `iat` / `exp` / `nbf`：签发、过期、开始生效时间，使用 Unix 时间戳，单位是**秒**。
- `jti`：令牌唯一标识，可以配合撤销或审计；单独存在不会阻止重放。
- `token_use`：这里自定义的令牌用途，区分 Access Token 等凭证。

这些字段不是都由 JWT 格式强制要求，应用必须约定哪些必填并实际校验。示例时间仅用于展示格式。

**Base64URL 不是加密；decode 不是 verify。** 攻击者可以重新编码任意内容，但在密钥安全、算法使用正确的前提下，无法生成服务端认可的新签名。

常见的 HS256 使用共享密钥；RS256 等非对称方案由私钥签发、公钥验证，适合分离签发与验证能力。采用哪种算法要结合信任边界与密钥管理，不能只凭“非对称”判断安全性。JWT 也可以使用 JWE 加密，但这与常见的签名型 JWT 是不同机制。

## 四、一次 JWT 登录与访问流程

```text
客户端通过 HTTPS 提交 POST /auth/login
    ↓
服务端校验登录输入、检查账号状态、验证密码哈希
    ↓
签发短期 Access Token，按需要建立刷新会话
    ↓
客户端请求业务 API
Authorization: Bearer <access_token>
    ↓
认证 Guard 提取 Token，验证签名、时间、发行方、接收方与用途
    ↓
建立可信身份上下文，例如 request.user
    ↓
授权 Guard 判断角色或权限；Service 检查具体资源归属
    ↓
执行业务并返回结果
```

登录接口通常对匿名用户开放，但仍需输入校验、限流及账号保护；密码应使用 Argon2id、bcrypt 等专用密码哈希方案保存，不能明文存储或用普通快速哈希替代。

普通用户携带有效 Token 修改他人的草稿，仍应被拒绝。这类资源归属检查通常适合放在业务层，并在数据库查询或更新条件中约束当前用户，不能只依赖前端隐藏按钮。

- 缺少或无效的认证凭证通常返回 **401**。
- 身份已确认但权限不足通常返回 **403**；某些资源接口也会统一返回 404，避免泄露资源是否存在。

NestJS 的 Guard 早于 Pipe 执行，因此不能假定 Guard 收到的路由参数已经通过 `ParseIntPipe` 或 DTO 校验。完整顺序见[请求生命周期](/学习自测/18nestjs/q_nestjs_7-request_lifecycle)。

## 五、在 NestJS 中如何分工？

| 组件 | 常见职责 |
| --- | --- |
| AuthController | 登录、刷新、退出等接口入口 |
| AuthService | 校验凭证、签发令牌、管理刷新会话 |
| JwtModule / JwtService | 配置可信密钥，执行签发和验证 |
| 认证 Guard | 提取 Token、验证凭证、建立身份上下文 |
| 授权 Guard | 根据路由元数据检查角色、权限等规则 |
| 业务 Service | 检查资源归属、数据状态等业务权限 |

也可以借助 Passport 的 Strategy 与 Guard 接入认证机制，并非必须自行编写全部解析与验证逻辑。

### Guard 验证示例

以下为学习片段：假设 `JwtModule` 已配置服务端可信的 HS256 高熵密钥，`learning-api` 与 `learning-web` 是本例约定的发行方和接收方。真实项目通过受控配置管理密钥，不在仓库硬编码，不从 Token 中任意指定密钥或下载地址。

```typescript
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import type { Request } from 'express'

type AccessClaims = {
  sub: string
  exp: number
  token_use: 'access'
}

type AuthenticatedRequest = Request & { user?: { id: string } }

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>()
    const match = /^Bearer\s+(\S+)$/i.exec(request.headers.authorization ?? '')
    if (!match) throw new UnauthorizedException('缺少访问凭证')

    try {
      const payload = await this.jwtService.verifyAsync<AccessClaims>(match[1], {
        algorithms: ['HS256'],
        issuer: 'learning-api',
        audience: 'learning-web',
        ignoreExpiration: false,
      })

      // TypeScript 泛型不做运行时校验；还要检查应用要求的声明。
      if (
        !payload ||
        typeof payload.sub !== 'string' ||
        !payload.sub.trim() ||
        !Number.isSafeInteger(payload.exp) ||
        payload.token_use !== 'access'
      ) {
        throw new Error('Invalid access claims')
      }

      request.user = { id: payload.sub }
      return true
    } catch {
      // 对外统一认证错误，不返回密钥或底层验证细节。
      throw new UnauthorizedException('访问凭证无效或已过期')
    }
  }
}
```

此 Guard 只演示访问令牌验证，不包含账号禁用查询、权限规则或刷新逻辑。若账号封禁必须立即生效，需要额外查询账号状态、校验会话版本或引入撤销机制。Token 中的角色也是签发时的快照，权限变化不会自动更新旧 Token。

## 六、过期、刷新、退出与“无状态”

### Access Token 与 Refresh Token

Access Token 短期有效，用于访问 API；例如 15 分钟只是示例，具体期限需要结合风险和使用体验。需要保持登录时，可以使用有效期更长的 Refresh Token 换取新的 Access Token。

Refresh Token **不必采用 JWT**，也可以是高熵随机字符串。服务端常保存其哈希及会话信息，便于撤销；客户端按平台能力妥善存储，不把它作为每次业务请求的凭证。

推荐的刷新设计包括：

1. 验证刷新凭证、有效期、会话和账号状态。
2. **轮换**刷新令牌，原子地失效旧值并签发新值，避免多个请求同时刷新造成竞态。
3. 检测已使用令牌的重复使用，按策略撤销对应会话或令牌族，并要求重新登录。
4. 客户端合并并发刷新请求，失败后结束会话，避免无限重试。

刷新接口同样需要限流；若依靠浏览器自动携带 Cookie，还需要对应的 CSRF 防护。

### 退出后旧 Token 为什么可能仍有效？

客户端删除令牌，只能让该客户端停止使用；被复制出去的 Access Token 仍可能一直有效到过期。服务端通常在退出时撤销刷新会话、清除 Cookie；若要求访问令牌立即失效，还需要撤销列表、会话版本或其他在线校验机制。

**JWT 可实现不查询集中会话的本地验签，但不等于整个认证系统没有状态。** 刷新、封禁与即时撤销往往都涉及服务端状态，也会改变请求成本和可用性依赖。

密钥轮换通常借助 `kid` 选择受控密钥集合中的密钥，在合理的过渡期兼容尚未过期的旧令牌；密钥泄露则需要紧急撤销策略，而不能只等待自然过期。

## 七、JWT、CSRF、XSS 与 Token 存储

### JWT 会自动防 CSRF 吗？

不会。CSRF 利用浏览器自动携带凭证，让用户在不知情的情况下发起操作。关键在于**凭证如何发送**，而不是凭证是否叫 JWT。

- JS 主动设置 `Authorization` 头时，攻击站点通常无法像 Cookie 一样让浏览器自动附带该头，可降低传统 Cookie 型 CSRF 风险；仍需正确配置跨域策略。
- JWT 放在 Cookie 并自动发送时，仍然需要 CSRF 防护。根据架构组合使用 SameSite、CSRF Token、Origin 校验等；`HttpOnly` 本身不防 CSRF。

### 存在哪里更合适？

| 位置 | 特点与风险 |
| --- | --- |
| JS 内存 | 页面关闭或刷新可能丢失；不会像 Cookie 一样自动发送，运行中的恶意脚本仍可能读取或滥用 |
| localStorage / sessionStorage | 使用方便，但能被同源 JS 读取；发生 XSS 时可能泄露令牌 |
| HttpOnly Cookie | JS 无法直接读取；需结合 Secure、SameSite、适当的 Domain/Path 与 CSRF 防护，XSS 仍可能以用户身份发起操作 |
| 移动端安全存储 | 可使用系统 Keychain / Keystore 等能力，仍需结合应用与设备安全设计 |

存储方式需要结合 SPA、同站应用或 BFF 等架构决定，不能简单认定某种存储绝对安全。Bearer Token 的典型特点是“持有即可使用”，一旦泄露，攻击者通常可在其有效期内重放。

HTTPS 在正确验证证书的前提下保护传输；它无法代替 XSS 防护，也不能阻止已泄露令牌被使用。JWT 签名本身同样不能解决中间人攻击或重放问题。

## 八、API 安全设计如何落地？

| 层面 | 实践要点 |
| --- | --- |
| 传输与凭证 | 全链路 HTTPS；避免把 Token 放进 URL；日志、链路追踪与错误信息隐藏密码及完整令牌 |
| 登录与会话 | 密码哈希、限流、异常登录保护；按风险启用 MFA；明确过期、刷新与撤销策略 |
| 身份与权限 | 验签并检查声明；最小权限；对象级授权与租户隔离；不能只判断“已登录” |
| 输入与业务 | DTO 校验、参数化查询、上传限制；关键写操作按需要设计幂等与防重放机制 |
| 浏览器边界 | 收紧 CORS，按 Cookie 使用方式防 CSRF；防 XSS，合理使用 CSP |
| 运维与审计 | 密钥轮换、敏感操作审计、异常访问监控；对依赖故障与资源消耗设置边界 |

CORS 主要约束浏览器中的跨域读取行为，不能阻止脚本或其他客户端直接请求 API，因此不能代替认证、授权或完整的 CSRF 防护。

“通信数据再加密”不应作为所有 API 的默认步骤。先保证 HTTPS、权限和敏感数据最小化；只有明确的威胁模型需要时，再增加字段级或端到端加密，并处理密钥、完整性和重放问题。自行设计“密文 + 加密参数”协议容易留下漏洞。

## 九、学习回顾：一分钟怎么讲？

> 我会先区分认证和授权：认证确认是谁，授权判断能做什么。Session 是会话机制，JWT 是 Token 格式，OAuth 2.0 则主要解决第三方委托授权，不完全是同一层的方案。
>
> 常见的签名型 JWT 由 Header、Payload 和 Signature 组成。登录成功后，客户端通常在 Authorization 头里带上 Token；NestJS 用 Guard 验证签名、有效期和发行方等声明，建立身份上下文，再做权限与资源归属判断。
>
> JWT 的特点是可以本地验签，但签名不是加密，也不会自动防 CSRF。实际还要处理 HTTPS、安全存储、短期访问令牌、刷新轮换和退出撤销。即时封禁等需求往往仍需要服务端状态，所以不能把它理解为完全无状态或绝对更安全。

## 十、下一步可以动手验证什么？

以下是后续练习建议，尚未在本站实现为可运行的后端服务：

- 修改 Payload 但不重新签名，确认验证失败；只 decode 时观察为何仍可读取。
- 分别传入过期、错误 issuer/audience、缺少 `exp` 和错误用途的令牌，确认被拒绝。
- 用自己的有效 Token 修改其他用户资源，验证对象级授权。
- 退出后尝试使用旧 Access Token 和 Refresh Token，观察过期与撤销的区别。
- 模拟两个并发刷新请求和旧刷新令牌重放，检查竞态及会话撤销策略。

> 来源：[NestJS Authentication](https://docs.nestjs.com/security/authentication)、[NestJS Authorization](https://docs.nestjs.com/security/authorization)
>
> 来源：[RFC 7519：JWT](https://www.rfc-editor.org/rfc/rfc7519)、[RFC 8725：JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)
>
> 来源：[RFC 9700：OAuth 2.0 Security Best Current Practice](https://www.rfc-editor.org/rfc/rfc9700)、[OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html)
>
> 来源：[OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)、[CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
