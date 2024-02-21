import straight from './直击概念'
import question from './面试官问'
import coding from './编写代码'
import contribution from './参与贡献'
import interview from './网友面经'

export default {
  '/直击概念/': straight,
  '/面试官问/': question,
  '/编写代码/': coding,
  '/网友面经/': interview,
  '/相关准备/': [
    {
      text: '如何利用该版块',
      items: [
        { text: '祝大家新年快乐', link: '/相关准备/三月后再删' },
        { text: '推荐工具', link: '/相关准备/index' },
        { text: '如何写好简历', link: '/相关准备/如何写好简历' },
      ],
    },
  ],
  '/参与贡献/': contribution,
}