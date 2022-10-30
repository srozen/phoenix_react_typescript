module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript/eslint-parser",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {},
  globals: {
    require: true,
    process: true,
    module: true,
  },
}
