// src/features/user/user.service.js
const UserService = {

  /**
   * Creates a new user with the given user data.
   * @param {Object} userData - The user data to create the user with.
   * @returns {Object} The created user object.
   */
  createUser(userData) {
    if (!userData.email || !userData.name) {
      throw new Error('Email and name are required.');
    }

    // Generate a user ID
    const userId = Math.random();

    // Return the user object
    return {
      id: userId,
      email: userData.email,
      name: userData.name,
      createdAt: new Date().toISOString(),
    };
  },


  /**
   * Validates whether the given email address is in a valid format.
   * @param {string} email - The email address to validate.
   * @returns {boolean} Whether the email address is valid.
   */
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },


  /**
   * Formats the given first and last names into a full name string.
   * @param {string} firstName - The first name to format.
   * @param {string} lastName - The last name to format.
   * @returns {string} The formatted full name string.
   */
  formatUserName(firstName, lastName) {
    return `${firstName.trim()} ${lastName.trim()}`.trim();
  }

};

module.exports = UserService;