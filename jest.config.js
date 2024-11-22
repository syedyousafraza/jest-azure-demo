module.exports = {
  clearMocks: true,
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.js",
    "**/*.test.js",
    "**/*.spec.js"
  ],

  passWithNoTests: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: [
    "text",
    "text-summary",
    "html",
    "lcov", 
    "cobertura",
  ],
  reporters: [
    'default',
    [ 'jest-junit', { outputDirectory: './', outputName: 'jest-test-results.xml' } ]
  ],
  verbose: true
};
