// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    //禁止tab和spaces混用
    'no-mixed-spaces-and-tabs':1,
    // 'extends': 'smart-tabs',
    //逗号后强制空格
    'comma-spacing': 0,
    //keyword 前空格
    'keyword-spacing': [0, {"before": false, "after": false, "overrides": null}],
    'space-before-function-paren': 0,
    //缩进为4个空格
    "indent": [0, 4],
    "no-tabs": 0,
    //强制分号结尾
    "semi": 0,
    // 强制引号
    //"quotes": [0,{"avoidEscape": true}],
    "quotes": [0,"double"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
