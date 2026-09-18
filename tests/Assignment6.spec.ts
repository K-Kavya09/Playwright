import { test, expect} from '@playwright/test';

test('Register Page Assertions', async({ page }) => {
    
    //open register page
    await page.goto("https://demowebshop.tricentis.com/register");
    // await page.locator('//html/body/div[4]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a').click();
    // Hard Assertion - verify page heading
    const registerHeading = page.getByRole('heading', {name:'Register'});
    await expect(registerHeading).toBeVisible();

    // Hard Assertion - Important fields are visible
    const firstName = page.locator('#FirstName');
    const lastName = page.locator('#LastName');
    const Email = page.locator('#Email');
    const Password = page.locator('#Password');

    await expect(firstName).toBeVisible();
    await expect(lastName).toBeVisible();
    await expect(Email).toBeVisible();
    await expect(Password).toBeVisible();

    const gender = page.locator('//html/body/div[4]/div[1]/div[4]/div[2]/form/div/div[2]/div[2]/div[2]/div[1]/label');
    await expect(gender).toBeVisible();

    // Verify Gender radio buttons are enabled
    //2. Verify that the Gender radio buttons are enabled and enter valid data into the registration fields.
    const maleRadio = page.locator('#gender-male');
    const FemailRadio = page.locator('#gender-male');
    
    await expect(maleRadio).toBeVisible();
    await expect(FemailRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    await expect(FemailRadio).toBeEnabled();

    // Enter registration details
    // 3. Verify the entered values using appropriate web-first assertions
    await maleRadio.check();
    await page.getByText('First name:').fill('kavya');
    await page.getByText('Last name:').fill('reddy.');
    await page.getByText('Email:').fill('reddy@gmail.com');
    await page.locator('//html/body/div[4]/div[1]/div[4]/div[2]/form/div/div[2]/div[3]/div[2]/div[1]/input').fill('reddy@gmail.com');
    await page.getByText('Confirm password:').fill('reddy@gmail.com');


    // another method 
    // // Enter registration details
    // await maleRadio.check();
    // await firstName.fill('Kavya');
    // await lastName.fill('Kumar');
    // await email.fill('kavya123@test.com');
    // await password.fill('Password@123');
    // await page.locator('#ConfirmPassword').fill('Password@123');

    // Verify entered values using web-first assertions
    await expect(firstName).toHaveValue('kavya');
    await expect(lastName).toHaveValue('reddy.');
    await expect(Email).toHaveValue('reddy@gmail.com');
    await expect(Password).toHaveValue('reddy@gmail.com');

    // Soft Assertions
    await expect.soft(maleRadio).toBeChecked();

    // Intentionally keeping a soft assertion example
    // Even if this fails, test execution continues
    await expect.soft(registerHeading).toHaveText('Registration');
    await expect(Password).toHaveValue('reddy@gmail.com');
});

// Assignment 2 — Custom Matcher & Visual Regression