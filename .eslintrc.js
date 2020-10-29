module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "indent": ["warn", 2],
    "semi": ["warn", "always"],
    "quotes": ["warn", "single"],
    "no-duplicate-imports": ["warn", {"includeExports": true}],
    "no-useless-rename": ["warn", {"ignoreImport": true}]
  }
};
