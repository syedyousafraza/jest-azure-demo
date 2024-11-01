
const Welcome = require('../../../src/features/user/welcome.service');

describe('Welcome', () => {
    test('greetings should return "Hello World"', () => {
      // Arrange
      const welcome = new Welcome();
  
      // Act
      const result = welcome.greetings();
  
      // Assert
      expect(result).toBe('Hello World');
    });
  });