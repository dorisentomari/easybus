module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'no-duplicate-imports': ['warn', {'includeExports': true}],
    'no-useless-rename': ['warn', {'ignoreImport': true}],
    'prettier/prettier': ['error', {
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      semi: true,
      trailingComma: 'all',
      bracketSpacing: true,
    }]
  }
};