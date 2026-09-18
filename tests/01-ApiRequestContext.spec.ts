import{test,expect,request} from '@playwright/test';
 
const baseURL="https://jsonplaceholder.typicode.com";
test('use the request fixture',async({request})=>{
    const response= await request.get(`${baseURL}/posts`);
    console.log(response)
    expect(response.status()).toBe(200);
    expect(response.ok()).toBe(true);
})

test('use page.request',async ({ page }) => {
    await page.waitForTimeout(3000);
    // await page.goto("https://jsonplaceholder.typicode.com/");
    const response = await page.request.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    expect(response.ok()).toBe(true);
})

test('create APIRequestContext manually', async() => {
    // request.newContext() create a new, separate APIRequestContext with my own settings.
    const apiContext = await request.newContext({ 
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        extraHTTPHeaders: { Accept: 'text/plain' },
    });

    const response = await apiContext.get('/posts');
    console.log(response)
    expect(response.status()).toBe(200);

    // A manually created context must be closed manually.

    await apiContext.dispose();
});
// | Header                     | Meaning                 |
// | -------------------------- | ----------------------- |
// | `Accept: application/json` | I want JSON             |
// | `Accept: application/xml`  | I want XML              |
// | `Accept: text/html`        | I want HTML             |
// | `Accept: text/plain`       | I want plain text       |
// | `Accept: */*`              | I can accept any format |