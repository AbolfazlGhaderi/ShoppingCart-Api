/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": ["ts-jest", {}],
  },
  testTimeout: 30000,
  moduleDirectories: ["node_modules"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/test/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
};
