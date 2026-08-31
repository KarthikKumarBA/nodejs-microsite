module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        document: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];
