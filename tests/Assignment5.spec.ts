
import { test, expect } from '@playwright/test';
test('adding to cart', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
     await page.locator('//html/body/div[4]/div[1]/div[2]/ul[1]/li[7]/a').click();
    //gift card
     await page.locator('//html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[3]/div[1]/div/div[1]/a/img').click();

     //details of gift card
     await page.getByText("Recipient's Name:").fill('anytime');
     await page.getByText("Recipient's Email:").fill('anytime@gmail.com');
     await page.getByText('Your Name:').fill('kavya');
     await page.getByText('Your Email:').fill('kavya@gmail.com');
     await page.getByText('Message:').fill('i am done for today ');
    
  //add to cart button
  await page.locator('//html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div/form/div/div[1]/div[2]/div[6]/div/input[2]').click();
  await page.getByText('The product has been added to your shopping cart');

//seleting 2nd objects
  await page.locator('//html/body/div[4]/div[1]/div[2]/ul[1]/li[1]/a').click();
  await page.locator('//html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[3]/div[1]/div/div[2]/div[3]/div[2]/input').click();
 await page.getByText('The product has been added to your shopping cart');

 // selected shopping cart
 await page.locator('#topcartlink > a > span.cart-label').click();

 const checkin = page.locator("//html/body/div[4]/div[1]/div[4]/div/div/div[2]/div/form/div[2]/div[2]/div[3]/input");
checkin.check();
await page.getByRole('button', {name:"checkout"}).click();
//final page
await page.getByText("Email:").fill('anytime@gmail.com'); 
await page.getByText("Password:").fill('anytimeom');
// await page.locator("//html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[2]/input");
// await page.locator("//html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[3]/input");
// const checkin1 = page.locator("//html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[4]/input[1]");
// checkin1.check();
// await page.locator("//html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[4]/input[1]").click();
// await page.getByRole('button', {name:"Log in"}).click();
// await page.getByText('Login was unsuccessful. Please correct the errors and try again.No customer account found');
});
 
