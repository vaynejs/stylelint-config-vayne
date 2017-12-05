/**
 *
 * styleLint 配置
 */
module.exports = {
  'plugins': [
    'stylelint-scss'
  ],
  'extends': [
    'stylelint-config-standard'
  ],
  'processors': [
    'stylelint-processor-html'
  ],
  'rules': {
    'no-empty-source': null,
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'at-root',
        'content',
        'debug',
        'each',
        'else',
        'else if',
        'error',
        'extend',
        'for',
        'function',
        'if',
        'import',
        'include',
        'media',
        'mixin',
        'return',
        'warn',
        'while'
      ]
    }],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/selector-no-redundant-nesting-selector': true
  }

}
