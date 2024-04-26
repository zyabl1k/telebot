module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "google",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "src/app/core/extension"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "object-curly-spacing": ["error", "always"],
    "quotes": [2, "single", { avoidEscape: true }],
    "indent": ["error", 2],
    "linebreak-style": 0,
    "jsx-quotes": ["error", "prefer-double"],
    "require-jsdoc": 0,
    "new-cap": 0,
    "react-hooks/exhaustive-deps": 0,
    "camelcase": 'off',
  },
};
