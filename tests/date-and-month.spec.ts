import { test, expect } from '@playwright/test';
 
test('select date from calender',async({page})=>{
await page.goto('https://demoqa.com/date-picker');
const dateinput =page.locator('#datePickerMonthYearInput');
await dateinput.click();
await expect(page.locator('.react-datepicker')).toBeVisible();
await page.locator('.react-datepicker__day.react-datepicker__day--021').filter({visible:true}).click();
await expect(dateinput).toHaveValue(/21/)
});
 
test ('change month in calender',async({page})=>{
 
    await page.goto('https://demoqa.com/date-picker');
 
    // const dateinput1=page.locator('#datePickerMonthYearInput');    
    const dateinput1=page.locator('//html/body/div/div/div/div/div[2]/div[1]/div[1]/div[2]/div[1]/div/input');
    await dateinput1.click();
    const calender =page.locator('#datePickerMonthYear > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div > button.react-datepicker__navigation.react-datepicker__navigation--next')
    await calender.click();
    // await calender.getByLabel('Next Month').click();
    await expect(calender).toBeVisible();
 
 
})

 