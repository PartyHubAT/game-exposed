module.exports = {
  parser: "babel-eslint",
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ["eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};