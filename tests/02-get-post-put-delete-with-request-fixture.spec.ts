import {expect,test,request} from '@playwright/test'
 
test('GET - read posts',async({request})=>{
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts'
    );
 
    expect(response.status()).toBe(200);
    const body=await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
});
 

test('PUT - Update post', async ({ request }) => {
 
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'UPDATE Post',
        body: 'UPDATE using Playwright',
        userId: 1
      }
    }
  );
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.title).toBe('UPDATE Post');
  expect(body.body).toBe('UPDATE using Playwright');
//   expect(body.userId).toBe(1);
});

