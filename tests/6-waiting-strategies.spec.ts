import { test, expect } from '@playwright/test';

//========================= waitForSelector() ======================

test('wait for an element', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.locator('#start button').click();

    // wait untill the element becomes visible
    await page.waitForSelector('#finish', {
        state: 'visible'
    });
    // verify the text
    await expect(page.locator('#finish')).toHaveText('Hello World!');
});
// ================================= waitforurl =============================

test('wait for url change', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();

    // wait untill URL changes
    await page.waitForURL(/secure/);

    // verify page
    await expect(page.locator('h2')).toHaveText('Secure Area');
});

// =========================== waitforloadState() ========================

test('wait for page to load',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.waitForLoadState('networkidle');
    await expect(page.getByPlaceholder('what needs to be done?')).toBeVisible();
});
test('wait for network response',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    const responsep=page.waitForResponse((response)=> response.url().includes('ajax-loader.gif'));
    await page.locator('#start button').click();
    const response =await responsep;
    expect(response.status()).toBe(200);
});