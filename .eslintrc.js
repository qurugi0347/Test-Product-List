module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:react/recommended"],
  plugins: ["prettier", "react", "react-hooks"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src/"],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: false,
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-underscore-dangle": "off",
    "no-param-reassign": ["error", {props: false}],
    "no-mixed-operators": "off",
    "no-restricted-syntax": "off",
    "no-unused-vars": "warn",
    "no-plusplus": "off",
    "no-continue": "off",
    "global-require": "off",
    "object-curly-newline": ["error", {consistent: true}],
    "prefer-destructuring": ["error", {object: true, array: false}],
    "no-console": "warn",
    "import/no-cycle": "off",
    "no-alert": "warn",
    "react/prop-types": "off",
    "class-methods-use-this": "off",
    "arrow-body-style": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "react-hooks/exhaustive-deps": "warn",
  },
  globals: {},
};
