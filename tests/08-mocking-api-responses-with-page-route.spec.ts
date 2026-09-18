import { test, expect } from '@playwright/test';

const URL = 'https://demo.playwright.dev/todomvc/';

//1. Intercept + continue

test('route.continue()', async ({ page }) => {
    let count = 0;
    await page.route('**/*', async (route) => { // whenever the browser makes a request matching this pattern, intercept it. **/* -> match all network requests.
        count++;
        console.log(route.request().url());
        await route.continue();
    });
    await page.goto(URL);
    expect(count).toBeGreaterThan(1);
});

test('route.request()', async ({ page }) => {
    await page.route('**/*.js', route => {
        route.abort();
    });
    await page.goto(URL);
    await expect(page.getByPlaceholder('what needs to be done?')).not.toBeVisible();
});

test('route.abort()',async({page})=>{
    await page.route('**/*.js',(route)=>{
        route.abort();
        console.log('url:',route.request().url());
    })
    await page.goto(URL);
    await expect(page.getByPlaceholder('What needs to be done?')).not.toBeVisible();
})
 

// 4. Mock 200 response
test('route.fulfill() - 200', async ({ page }) => {
  // Intercept this request
  await page.route('https://example.com/mock.json', async route => {
    // Return our fake response
    await route.fulfill({ status: 200, body: JSON.stringify({ message: 'Fake data' }) });
  });
  // Send request to the URL
  const response = await page.evaluate(async () => {
    const res = await fetch('https://example.com/mock.json');
    return res.json();
  });
  // Verify fake response
  expect(response.message).toBe('Fake data');
});
// 5. Mock 500 response
test('route.fulfill() - 500', async ({ page }) => {
  await page.route('**/mock.json', route =>
    route.fulfill({ status: 500, body: 'Server Error' })
  );
  const status = await page.evaluate(async () => {
    const res = await fetch('https://example.com/mock.json');
    return res.status;
  });
  console.log(status)
  expect(status).toBe(500);
});
// 6. Remove mock

test('page.unroute',async({page})=>{
    const mock =(route:any)=>
        route.fulfill({status:200,body:'mock'});
    await page.route('**/mock.json',mock);
    await page.unroute('**/mock.json',mock);
 
});