import { test, expect } from '@playwright/test';
 
test('Add and read a cookie',async({page,context}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    //add a cookie
    await context.addCookies([
        {
            name:'username',
            value:'John',
            url: 'https://demo.playwright.dev'
        }
    ]);
    // await page.waitForTimeout(30000);
    //get cookies
    const cookies=await context.cookies();
    //verify cookie
    expect(cookies[0].name).toBe('username');
    expect(cookies[0].value).toBe('John');
});
//local storage
test('Store and read local storage',async({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
 
    //store data in localstorage
    await page.evaluate(()=>{
        localStorage.setItem('username','John');
    });
    // await page.localStorage.setting('username', 'john');
    // read data from localstorage

    const username = await page.evaluate(() => {
        return localStorage.getItem('username');
    });
    // await page.waitForTimeout(30000);

    // Verify data
    expect(username).toBe('John');
   
});
 // ============= session storage==================

test('Store and read sessionStorage', async ({ page }) => {
 
  await page.goto('https://demo.playwright.dev/todomvc');
 
  // Store data in sessionStorage
  await page.evaluate(() => {
    sessionStorage.setItem('username', 'John');
  });
 
  // Read data from sessionStorage
  const username = await page.evaluate(() => {
    return sessionStorage.getItem('username');
  });
 
  // Verify data
  expect(username).toBe('John');
});