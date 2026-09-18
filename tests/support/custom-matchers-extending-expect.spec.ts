// test.spec.ts
import { test } from "@playwright/test";
import { expect } from "./custom-matcher";
 
test("Verify product price", async ({ page }) => {
 
  await page.goto("https://example.com");
 
  const price = page.locator(".product-price");
 
  await expect(price).toBeWithinPriceRange(70000, 90000);
});