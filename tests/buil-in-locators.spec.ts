import { test, expect } from '@playwright/test';

test('Practice Playwright built-in locators', async({ page }) => {
    // open application

    await page.goto('https://playwrightlab.github.io');

    // 1.getByRole()
    // Find an element using its accessibility role and name
    const button = page.getByRole('button' , { name: 'Submit'});
    await expect(button).toBeVisible();

    // 2. getByRole()
    // Find an element using visible text
    const heading = page.getByText('beautifully');
    await expect(heading).toBeVisible();

    // // 3. getByLabel()
    // // Find a form field using its associated label
    const username = page.getByLabel('Full Name *');
    await expect(username).toBeVisible();
    await username.fill('testuser');

    // // 4. getByPlaceholder()
    // // Find an input using its placeholder text

    const password = page.getByPlaceholder('Min 8 characters');
    await expect(password).toBeVisible();
    await password.fill('testpassword');

    // 5. getByAltText()
    // Find an image using its alt text

    const logo = page.getByAltText('Triumph Speed Triple');    await expect(logo).toBeVisible();

    // 6. getByTitle()
    // Find an element using its title attributes
    const title = page.getByTitle('Nested frames practice');
    await expect(title).toBeVisible();

    // 7. getByTestId
    const msg =page.getByTestId('logo');
    await expect(msg).toBeVisible();

    // 8. CSS Selector
    const explorebtn = page.locator('#exploreTourBtn');
    await expect(explorebtn).toBeVisible();

    // 9.xpath selector
    const explorebtn1 = page.locator('//*[@id="exploreTourBtn"]');
    await expect(explorebtn1).toBeVisible();

    // 10. Fullxpath
    const registration = page.locator('//html/body/section[1]/div[2]/div[2]/button');
    // or   const registration = page.locator('xpath = /html/body/section[1]/div[2]/div[2]/button');

    // for full xpath we shld copy the full xpath and then paste the copied path and then before to the path use 'xpath=' or // .
    await expect(registration).toBeVisible();

    // 11. CSS selector - find by tag
    const resetbtn = page.locator('ul[id="navLinks"]');
    await expect(resetbtn).toBeVisible();

    // 12. CSS selector - find by attribute
    const resetbtn1 = page.locator('button[ data-testid="btn-register"]');
    await expect(resetbtn1).toBeVisible();

    // 13. find button containing text
    const resetbtn2 = page.locator('button[data-testid="btn-register"]');
    await expect(resetbtn2).toBeVisible();

    // 14. find by relationships
    const resetbtn3 = page.locator('form >> div >> button[type="reset"]');
    await expect(resetbtn3).toBeVisible();

    // example CSS selector - find by tag
    // const resetbtnn = page.locator('div[id="inputCardsStack"]');
    // await expect(resetbtnn).toBeVisible();

    
});