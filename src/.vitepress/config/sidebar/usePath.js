const STRAIGHT = '直击概念'
const QUESTION = '面试官问'
const CODING = '编写代码'
// const CONTRIBUTION = '参与贡献'

const typeMap = {
  html: '01htmlcss',
  css: '01htmlcss',
  js: '02js',
  javascript: '02js',
  es6: '02js',
  promise: '02js',
  sort: '03algo',
  algo: '03algo',
  http: '04http',  
  request: '04http',  
  node: '05node',
  nodejs: '05node',
  opt: '06opt',
  performance: '06opt',
  optimization: '06opt',
  vue: '07vue',
  vuex: '07vue',
  react: '08react',
  redux: '08react',
  mobx: '08react',
  webpack: '09build',
  vite: '09build',
  build: '09build',
  safe: '10safe',
  ts: '11ts',
  typescript: '11ts',
  bw: '12broswer',
  browser: '12broswer',
  solution: '13solution',
  slt: '13solution',
  solve: '13solution',
}

export function useStraightIntro(type) {
  return `/直击概念/${typeMap[type]}/intro`
}

export function useQuestionIntro(type) {
  return `/面试官问/${typeMap[type]}/intro`
}

export function useCodingIntro(type) {
  return `/编写代码/${typeMap[type]}/intro`
}

export function useStraightItem(title, type, index = 0, fileName, options = {}) {
  return {
    text: title,
    link: `/${STRAIGHT}/${typeMap[type]}/s_${type}_${index}-${fileName}`,
    ...options,
  }
}

export function useQuestionItem(title, type, index = 0, fileName, options = {}) {
  return {
    text: title,
    link: `/${QUESTION}/${typeMap[type]}/q_${type}_${index}-${fileName}`,
    ...options,
  }
}

export function useCodingItem(title, type, index = 0, fileName, options = {}) {
  return {
    text: title,
    link: `/${CODING}/${typeMap[type]}/c_${type}_${index}-${fileName}/c_${type}_${index}-${fileName}`,
    ...options,
  }
}
