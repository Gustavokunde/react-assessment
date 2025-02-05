module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
