import {test,expect} from '@playwright/test';
//status code
test('check API status code',async({request})=>{
    const response= await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);
    expect(response.ok()).toBe(true);
});
//response header
test('check response header',async({request})=>{
    const response= await request.get('https://jsonplaceholder.typicode.com/posts');
    const contentType=response.headers()['content-type'];
 //   expect(contentType).toContain('text/html');
});
//json response
test('Check JSON response',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/posts');
    const body=await response.json();
    //reads the response body and converts the JSON data into a javascript object.{key:vale} pair
    //check important fileds
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('body');
 
    expect(body.length).toBeGreaterThan(0);
});
 
//product data
test('Check product data',async({request})=>{
    const response= await request.get('https://jsonplaceholder.typicode.com/posts');
 
    const body = await response.json();
    console.log(body)
     const product=body[0];
    // console.log('Product:',product);
 
    //check important fields
    expect(product).toHaveProperty('userId');
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('body');
 
    //check data types
    expect(typeof product.userId).toBe('number');
    expect(typeof product.id).toBe('number');
    expect(typeof product.title).toBe('string');
    expect(typeof product.body).toBe('string');
});