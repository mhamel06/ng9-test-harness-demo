module.exports = {
  "preset": "jest-preset-angular",
  "testMatch": [
    "**/__tests__/**/*.+(ts|js)?(x)",
    "**/?(*.)+(spec|test).+(ts|js)?(x)"
  ],
  "globals": {
    "ts-jest": {
      "tsConfigFile": "./tsconfig.spec.json"
    },
    "__TRANSFORM_HTML__": true
  },
  setupFilesAfterEnv: ["./setup-jest.ts"],
  resolver: '@nrwl/jest/plugins/resolver'
}