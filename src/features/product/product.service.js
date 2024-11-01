// src/features/product/product.service.js
const ProductService = {

  /**
   * Calculates the discounted price for a product based on the given price and discount percentage.
   * @param {number} price - The original price of the product.
   * @param {number} discountPercent - The discount percentage to apply to the price.
   * @returns {number} The discounted price of the product, rounded to two decimal places.
   */
  calculateDiscount(price, discountPercent) {
    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
      throw new Error('Invalid price or discount percentage');
    }

    const discount = (price * discountPercent) / 100;
    return Number((price - discount).toFixed(2));
  },


  /**
   * Checks whether a product is currently in stock.
   * @param {Object} product - The product to check.
   * @returns {boolean} Whether the product is in stock.
   */
  isInStock(product) {
    return product.quantity > 0;
  },


  /**
   * Formats a price as a currency string in US dollars.
   * @param {number} price - The price to format.
   * @returns {string} The formatted price as a currency string.
   */
  formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  },


  sum(a,b){
    return a+b;
  }

};

module.exports = ProductService;