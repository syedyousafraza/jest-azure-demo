// calculator.test.js
const Calculator = require('../../../src/features/product/calculator');


test('mocking add function', () => {
  // Create instance of Calculator
  const calc = new Calculator();

  // Mock the add function :Replace the real add method with a mock
  calc.add = jest.fn(function () {
    return 42;
  });

  // Call doublePlus which will use our mocked add
  const result = calc.doublePlus(5);

  expect(result).toBe(42); // This should pass as we are mocking the add function

});