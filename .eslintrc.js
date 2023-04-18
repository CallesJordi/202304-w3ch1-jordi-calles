module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: ["xo", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "error",
  },
};
