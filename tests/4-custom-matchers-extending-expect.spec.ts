import { test, expect } from './custom-matchers';

test('Use custom matcher', async ({ page }) => {
    
    await page.goto('https://playwrightlab.github.io/');

    //get text from an element

    const text = await page.locator('h1').innerText();

    console.log(text);

    //check the length of the text
    expect(text).toHaveTextLength(text.length);
});