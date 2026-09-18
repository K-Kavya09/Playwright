import { expect as baseExpect } from '@playwright/test';

export const expect = baseExpect.extend({
  async toHaveProductCount(locator, expectedCount: number) {
    const actualCount = await locator.count();

    const pass = actualCount === expectedCount;

    return {
      pass,
      message: () =>
        pass
          ? `Expected product count not to be ${expectedCount}`
          : `Expected ${expectedCount} products but found ${actualCount}`,
    };
  },
});
