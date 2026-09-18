import { test, expect, request } from '@playwright/test';

/* Authontication:
// It is like proving who the API caller is.
// 1. Bearer Token -> sent in Authonrization header
// 2. API Key -> sent in a header or query parameter
// 3. cookie -> sent as a cookie

// 1.Bearer Token
*/
test('Bearer Token authentication', async ({ request }) => {
    const response = await request.get('https://postman-echo.com/headers', {
        headers: { Authorization: 'Bearer test-token-123'}
    });
    expect(response.status()).toBe(200);
    const body = await response.json();

    // verify that the token was sent.
    expect(body.headers.authorization).toBe('Bearer test-token-123'); 
});

// 2. API Key in Header
test('API Key in Header', async ({ request }) => {
    const response = await request.get('https://postman-echo.com/headers', {headers: { 'X-Api-Key':'demo-key-123'}
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    // verify that the API key was sent.
    expect(body.headers['X-Api-Key']).toBe('demo-key-123');
});
// 3. API Key as Query Parameter === https://postman-echo.com/
test('API Key in Query Parameter', async({ request }) => {
    const response =await request.get('https://postman-echo.com/get', {
        params: {
            api_key: 'demo-key-123'
        }// get?api_key = demo-key-123
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.args.api_key).toBe('demo-key-123');
});
// 4. Cookie

test('Cookie authentication', async ({ request }) => {
    const response =await request.get('https://postman-echo.com/cookies', {
        headers: {
            Cookie: 'session_id=abc123'
        }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.cookies.session_id).toBe('abc123');
});