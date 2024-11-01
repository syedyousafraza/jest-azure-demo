const UserService = require('../../../src/features/user/user.service');
const userFixtures = require('../../fixtures/user.fixtures');

describe('UserService', () => {
  describe('createUser', () => {
    test('should create user with required fields', () => {
      // Arrange
      const userData = userFixtures.validUser;

      // Act
      const user = UserService.createUser(userData);

      // Assert
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('createdAt');
      expect(user.email).toBe(userData.email);
      expect(user.name).toBe(userData.name);
    });

    test('should throw error when required fields are missing', () => {
      // Arrange
      const invalidData = { age: 25 };

      // Act & Assert
      expect(() => {
        UserService.createUser(invalidData);
      }).toThrow('Email and name are required');
    });

  });


  describe('validateEmail', () => {
    const testCases = [
      ['valid@email.com', true],
      ['invalid-email', false],
      ['user@domain', false],
      ['', false]
    ];
    /*
    %s is a placeholder used in the string description of a test case when using test.each(). 
    It allows you to dynamically insert the value of a parameter into the test's name, 
    */
    test.each(testCases)('should validate email %s correctly', (email, expected) => {
      // Arrange (in this case, the input is arranged in the test.each)

      // Act
      const result = UserService.validateEmail(email);

      // Assert
      expect(result).toBe(expected);
    });
  });

  // describe('Username Formating', () => {
  //   // Test cases for formatting user names
  //   const testCases = [
  //     ['John', 'Doe', 'John Doe'],             // Standard case
  //     ['  John  ', '  Doe  ', 'John Doe'],     // Leading and trailing spaces
  //     ['John', '', 'John'],                     // Missing last name
  //     ['', 'Doe', 'Doe'],                       // Missing first name
  //     ['  Alice  ', 'Smith', 'Alice Smith'],   // Leading spaces on first name
  //     ['Bob', '  ', 'Bob'],                     // spaces on last name
  //     ['   ', '   ', ''],                       // Both names are empty
  //   ];

  //   test.each(testCases)('should format "%s %s" to "%s"', (firstName, lastName, expected) => {
  //     // Arrange (input is already set up in the test.each)

  //     // Act
  //     const result = UserService.formatUserName(firstName, lastName);

  //     // Assert
  //     expect(result).toBe(expected);
  //   });
  // });

});
