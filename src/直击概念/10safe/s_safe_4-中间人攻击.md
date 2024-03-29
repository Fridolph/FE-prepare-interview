# MitM 中间人攻击

中间人攻击（Man-in-the-middle attack，简称 MitM）会`在消息发出方和接收方之间拦截双方通讯`。

在密码学和计算机安全领域中是指攻击者与通讯的两端分别建立独立的联系，并交换其所收到的数据，使通讯的两端认为他们正在通过一个私密的连接与对方直接对话，但事实上整个会话都被攻击者完全控制。在中间人攻击中，攻击者可以拦截通讯双方的通话并插入新的内容。在许多情况下这是很简单的（例如，在一个未加密的 Wi-Fi 无线接入点的接受范围内的中间人攻击者，可以将自己作为一个中间人插入这个网络）。

## 特性

中间人攻击需要通过一个安全的通道做额外的传输。与连锁协议不同，**所有能抵御中间人攻击的加密系统都需要通过一个安全通道来传输或交换一些额外的信息**。为了满足不同安全通道的不同安全需求，许多密钥交换协议已经被研究了出来。

## 攻击示例

> 本来我都理解了，看了维基这例子基本把我绕晕了。。。看不惯的可以去提 issue，哈哈

::: details 假设爱丽丝（Alice）希望与鲍伯（Bob）通信。同时，马洛里（Mallory）希望拦截窃会话以进行窃听并可能在某些时候传送给鲍伯一个虚假的消息。

爱丽丝收到公钥后相信这个公钥是鲍伯的，于是爱丽丝将她的消息用马洛里的公钥（爱丽丝以为是鲍伯的）加密，并将加密后的消息回给鲍伯。马洛里再次截获爱丽丝回给鲍伯的消息，并使用马洛里自己的私钥对消息进行解密，如果马洛里愿意，她也可以对消息进行修改，然后马洛里使用鲍伯原先发给爱丽丝的公钥对消息再次加密。当鲍伯收到新加密后的消息时，他会相信这是从爱丽丝那里发来的消息。

1.爱丽丝发送给鲍伯一条消息，却被马洛里截获：

> 爱丽丝“嗨，鲍伯，我是爱丽丝。给我你的公钥” --> 马洛里 鲍伯

2.马洛里将这条截获的消息转送给鲍伯；此时鲍伯并无法分辨这条消息是否从真的爱丽丝那里发来的：

> 爱丽丝 马洛里“嗨，鲍伯，我是爱丽丝。给我你的公钥” --> 鲍伯

3.鲍伯回应爱丽丝的消息，并附上了他的公钥：

> 爱丽丝 马洛里<-- \[鲍伯的公钥\]-- 鲍伯

4.马洛里用自己的密钥替换了消息中鲍伯的密钥，并将消息转发给爱丽丝，声称这是鲍伯的公钥：

> 爱丽丝<-- \[马洛里的公钥\]-- 马洛里 鲍伯

5.爱丽丝用她以为是鲍伯的公钥加密了她的消息，以为只有鲍伯才能读到它：

> 爱丽丝“我们在公共汽车站见面！”--\[使用马洛里的公钥加密\] --> 马洛里 鲍伯

6.然而，由于这个消息实际上是用马洛里的密钥加密的，所以马洛里可以解密它，阅读它，并在愿意的时候修改它。他使用鲍伯的密钥重新加密，并将重新加密后的消息转发给鲍伯：

> 爱丽丝 马洛里“在家等我！”--\[使用鲍伯的公钥加密\] --> 鲍伯

7.鲍伯认为，这条消息是经由安全的传输通道从爱丽丝那里传来的。

:::

这个例子显示了爱丽丝和鲍伯需要某种方法来确定他们是真正拿到了属于对方的公钥，而不是拿到来自攻击者的公钥。否则，这类攻击一般都是可行的，在原理上，可以针对任何使用公钥——密钥技术的通讯消息发起攻击。幸运的是，有各种不同的技术可以帮助抵御 MITM 攻击。

**晕了吗？马上让你清醒**

用日常生活中的写信来类比的话：你`给朋友写了一封信`，邮递员可以把每一份你寄出去的信都拆开看，甚至把信的内容改掉，然后重新封起来，再寄出去给你的朋友。朋友收到信之后给你回信，邮递员又可以拆开看，看完随便改，改完封好再送到你手上。**你全程都不知道自己寄出去的信和收到的信都经过邮递员这个“中间人”转手和处理**——换句话说，对于你和你朋友来讲，`邮递员`这个“中间人”角色是不可见的。

对于实际生活中的信件沟通和线上的信息交流来说，中间人攻击都是很难防范的，这里有一些小建议：

- 不要忽视浏览器弹出的证书警告！你可能访问的是钓鱼网站或者假冒的服务器；
- 公共网络环境下（例如公共 WiFi），没有 HTTPS 加密的敏感网站不要随便登录，一般不可信；
- 在任何网站上登录自己的账号前确保网址为 HTTPS 加密协议；

## 防御攻击

许多抵御中间人攻击的技术基于以下认证技术：

- 公钥基础建设
- 更强力的相互认证，例如：
  - 密钥（通常是高信息熵的密钥，从而更安全），或
  - 密码（通常是低的信息熵的密钥，从而降低安全性）
- 延迟测试
- 第二（安全的）通道的校验
- 一次性密码本可以对中间人攻击免疫

查看[密钥交换协议](https://zh.wikipedia.org/w/index.php?title=%E5%AF%86%E9%92%A5%E4%BA%A4%E6%8D%A2%E5%8D%8F%E8%AE%AE&action=edit&redlink=1)以了解不同类别的使用不同密钥形式或密码以抵御中间人攻击的协议。

## 会话劫持

会话劫持是中间人攻击的一种实现，发生在攻击者接管两台计算机之间的`有效会话`时。攻击者窃取有效的会话 ID，以便侵入系统并窥探数据。

大多数身份验证只在 TCP 会话开始时发生。在 TCP 会话劫持中，`攻击者通过`接管两台计算机之间正在进行的`TCP会话`来`获取访问权限`。

<Image src="https://developer.mozilla.org/en-US/docs/Glossary/Session_Hijacking/session_hijacking_3.jpg" alt="会话劫持示例" />

### 会话劫持发生原因

- 无效会话 ID 没有账户锁定
- 会话 ID 生成算法弱
- 处理不安全
- 会话过期时间不确定
- 会话 ID 长度过短
- 信息传输以明文方式进行

### 会话劫持的过程

- 嗅探，即进行中间人（MITM）攻击，将自己置于受害者和服务器之间。
- 监视服务器和用户之间传递的数据包。
- 断开受害者机器的连接。
- 接管会话。
- 利用受害者的会话 ID 向服务器注入新的数据包。

### 防范会话劫持的方法

- 使用 SSH（安全外壳协议）创建安全通信通道
- 通过 HTTPS 连接传递认证 cookie
- 实施注销功能，让用户可以结束会话
- 在成功登录后生成会话 ID
- 在用户和 Web 服务器之间传递加密数据
- 使用字符串或长随机数作为会话密钥

## 参考

- [MDN-中间人攻击](https://developer.mozilla.org/zh-CN/docs/Glossary/MitM)
- [维基-中间人攻击](https://zh.wikipedia.org/zh-cn/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)
