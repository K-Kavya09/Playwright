import { test, expect } from '@playwright/test';
//dropdown
test('select options from dropdown',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown =page.locator('#dropdown');
    const options=await dropdown.selectOption('1');
    console.log('selected option',options);
    await expect(dropdown).toHaveValue('1');
});
//radio
test('select radio button',async({page})=>{
    await page.goto('https://demoqa.com/radio-button');
    const yesradio =page.locator('#yesRadio');
    const impressiveRadio=page.locator('#impressiveRadio');
    await yesradio.check();
    await expect(yesradio).toBeChecked();
    await expect(impressiveRadio).not.toBeChecked();
});
 
//multiselect
 
test ('select multiple options',async({page})=>{
    await page.goto('https://demoqa.com/select-menu');
    const cars =page.locator('#cars');
    await cars.selectOption(['volvo','audi']);
    await expect(cars).toHaveValues(['volvo','audi']);
})