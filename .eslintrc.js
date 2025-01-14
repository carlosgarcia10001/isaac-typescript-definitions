// This is the configuration file for ESLint, the TypeScript linter
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    // The linter base is the shared IsaacScript config
    // https://github.com/IsaacScript/eslint-config-isaacscript/blob/main/index.js
    "eslint-config-isaacscript",
  ],

  parserOptions: {
    // ESLint needs to know about the project's TypeScript settings in order for TypeScript-specific
    // things to lint correctly
    // We do not point this at "./tsconfig.json" because certain files (such at this file) should be
    // linted but not included in the actual project output
    project: "./tsconfig.eslint.json",
  },

  rules: {
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: {
          memberTypes: ["instance-method", "instance-field"],
          order: "alphabetically",
        },
      },
    ],
  },
};
