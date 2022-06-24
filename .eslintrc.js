module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
      "cypress/globals": true
    },
    extends: [
      "eslint:recommended",
      "plugin:cypress/recommended",
      "plugin:chai-friendly/recommended",
      "plugin:json/recommended"
    ],
    plugins: [
      "extra-rules",
      "json",
      "cypress",
      "simple-import-sort",
      "import",
      "prettier"
    ],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".ts"]
        }
      }
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      allowImportExportEverywhere: true
    },
    rules: {
      "extra-rules/no-commented-out-code": "warn",
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "off",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": "off", // cannot work with prettier
      "space-before-blocks": "error",
      "json/*": ["error", { allowComments: true }],
      "linebreak-style": 0,
      "no-unused-vars": "off",
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
      "generator-star-spacing": "off",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/no-mutable-exports": "error",
      "import/no-unresolved": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto"
        }
      ]
    }
  };