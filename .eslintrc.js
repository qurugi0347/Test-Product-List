module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src/"],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
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
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  rules: {
    "no-underscore-dangle": "off",
    "no-param-reassign": ["error", {props: false}],
    "no-mixed-operators": "off",
    "no-restricted-syntax": "off",
    "no-use-before-define": "off",
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
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  globals: {},
};
