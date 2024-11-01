// calculator.js
class Calculator {

  /**
   * Adds two numbers together.
   * @param {number} a - The first number to add.
   * @param {number} b - The second number to add.
   * @returns {number} The sum of the two numbers.
   */
  add(a, b) {
    return a + b;
  }

  

  /**
   * Doubles a number and adds it to itself.
   * @param {number} num - The number to double and add to itself.
   * @returns {number} The result of doubling the number and adding it to itself.
   */
  doublePlus(num) {
    return this.add(num, num);
  }

}

module.exports = Calculator;