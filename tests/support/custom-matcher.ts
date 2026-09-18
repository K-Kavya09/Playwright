import { expect as baseExpect } from '@playwright/test';

export const expect = baseExpect.extend({
  async toBeWithinPriceRange(
    locator,
    minPrice: number,
    maxPrice: number
  ) {
    const actualText = await locator.textContent();

    const actualPrice = Number(
      actualText?.replace(/[₹,]/g, '')
    );

    const pass =
      actualPrice >= minPrice &&
      actualPrice <= maxPrice;

    return {
      pass,
      message: () =>
        pass
          ? `Expected price not to be between ₹${minPrice} and ₹${maxPrice}`
          : `Expected price to be between ₹${minPrice} and ₹${maxPrice}, but found ₹${actualPrice}`,
    };
  },
});