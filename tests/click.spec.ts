import { test, expect } from '@playwright/test';
 
//enter and fill
test('enter',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.getByPlaceholder('what needs to be done?').fill('buy milk');
    await page.getByPlaceholder('what needs to be done?').press('Enter');
});
 
//presssequential (adding an extra value to the given value)
test('type text characters',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.getByPlaceholder('username').pressSequentially('admin',{delay : 500});
    await expect(page.getByPlaceholder('username')).toHaveValue('admin');
});
 
//keyboard shortcuts
test('use keyboard shortcut',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    const username =page.getByPlaceholder('username');
    await username.fill('Admin');
    //select all text
    await username.press('Control+A');
    await username.press('Backspace');
    await expect(username).toHaveValue('');
 
});
 
 
//drag and drop
test('Drag one element to another',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    const boxA=page.locator('#column-a')
    const boxB=page.locator('#column-b')
 
    await expect(boxA.locator('header')).toHaveText('A')
    await expect(boxB.locator('header')).toHaveText('B')
 
    await boxA.dragTo(boxB);
 
    await expect(boxA.locator('header')).toHaveText('B')
    await expect(boxB.locator('header')).toHaveText('A')
 
})
 
 test ('perform mouse actions',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    await page.mouse.move(100,200);
    await page.mouse.down();
    await page.mouse.move(300,200);
    await page.mouse.up();
 
})