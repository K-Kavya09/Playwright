import { test, expect } from '@playwright/test';
test('check full page screen shot',async({page})=>{
    await page.goto('https://playwrightlab.github.io/',{waitUntil:'networkidle'});
    await expect(page).toHaveScreenshot('home-page.png',{
        fullPage:true,
        maxDiffPixelRatio:0.05,timeout:10000
    });
});
 
test ('checked element screenshot', async({page})=>{
    await page.goto('https://playwrightlab.github.io/');
    const heading =page.getByRole('heading').first();
    await expect(heading).toHaveScreenshot('heading.png');
})