import { test, expect } from '@playwright/test'
test.describe('File Upload', () => {
 
    test('Upload a single file', async ({ page }) => {
 
        // Open file upload page
        await page.goto('https://the-internet.herokuapp.com/upload');
 
        // Select a file
        await page.locator('#file-upload').setInputFiles('tests/test data/sample.txt');
 
        // Click Upload
        await page.getByRole('button', { name: 'Upload' }).click();
 
        // Verify uploaded file
        await expect(
            page.locator('#uploaded-files')
        ).toHaveText('sample.txt');
    });
});