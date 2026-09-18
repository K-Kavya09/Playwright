import { test, expect } from '@playwright/test';

test('Download a file', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByText('wonder.txt').click()
    ]);

    // const download1 = page.waitForEvent('download');
    // page.getByText('sample.txt').click()
    // const download = await download1
    // Get download file name
    const fileName = download.suggestedFilename();
    console.log('Download file:', fileName);

    await download.saveAs(`downloads/${fileName}`);
    expect(fileName).toBe('wonder.txt');
});
