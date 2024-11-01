module.exports = {
    clearMocks: true,
    testEnvironment: "node",
    
    testMatch: [
      "**/__tests__/**/*.js",
      "**/*.test.js",
      "**/*.spec.js"
    ],
  
    // Allow empty test suites
    passWithNoTests: true,
    
    // Built-in coverage reporting
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
      "text",
      "text-summary",
      "html",
      "lcov", 
      "cobertura", 
    ],
  
    verbose: true
  };