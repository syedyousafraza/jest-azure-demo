const ProductService = require('../../../src/features/product/product.service');
const productFixtures = require('../../fixtures/product.fixtures');

describe('ProductService', () => {
  describe('calculateDiscount', () => {
    test.each([
      [100, 10, 90],
      [50, 20, 40],
      [100, 0, 100]
    ])('should calculate %i with %i%% discount to be %i', (price, discount, expected) => {
      // Arrange
      // Inputs are arranged through the test.each parameters

      // Act
      const result = ProductService.calculateDiscount(price, discount);

      // Assert
      expect(result).toBe(expected);
    });

    test('should throw error for invalid inputs', () => {
      // Arrange
      const invalidInputs = [
        [-100, 10],
        [100, -10],
        [100, 150]
      ];

      // Act & Assert
      invalidInputs.forEach(([price, discount]) => {
        expect(() => ProductService.calculateDiscount(price, discount)).toThrow();
      });
    });
  });

  describe('isInStock', () => {
    test('should return true for products with quantity > 0', () => {
      // Arrange
      const product = productFixtures.inStockProduct;

      // Act
      const result = ProductService.isInStock(product);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false for products with quantity = 0', () => {
      // Arrange
      const product = productFixtures.outOfStockProduct;

      // Act
      const result = ProductService.isInStock(product);

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('formatPrice', () => {
    test.each([
      [99.99, '$99.99'],
      [100, '$100.00'],
      [1234.5, '$1,234.50'],
      [0, '$0.00']
    ])('should format %s to %s', (price, expected) => {
      // Arrange
      // Inputs are arranged through the test.each parameters

      // Act
      const result = ProductService.formatPrice(price);

      // Assert
      expect(result).toBe(expected);
    });
  });
});
