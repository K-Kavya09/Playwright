import { test, expect} from '@playwright/test';

test.describe('Handling browser dailogs', () => {
    test('Handle alert popup', async ({page}) => {
        // listen for the alert
        page.on('dialog', async(dialog) => {
            console.log(dialog.message());
            //accept the alert
            await dialog.accept();
        });
        await page.goto('https://playwrightlab.github.io/');
        await page.getByRole('button' , { name: 'window.alert()'}).click();
        await expect(
            page.locator('#nativeResult')
        ).toHaveText('Alert was dismissed');
    });
    test('Handle handle popup', async ({page}) => {

        page.on('dialog', async(dialog) => {
            console.log(dialog.message());
            //accept the alert
            await dialog.dismiss();
        });
        await page.goto('https://playwrightlab.github.io/');
        await page.getByRole('button' , { name: 'window.confirm()'}).click();
        await expect(
            page.locator('#nativeResult')
        ).toHaveText('Confirm result: false');
    });
    test('Handle prompt popup', async ({page}) => {

        page.on('dialog', async(dialog) => {
            console.log(dialog.message());
            //accept the alert
            await dialog.accept('Playwright Tester');
        });
        await page.goto('https://playwrightlab.github.io/');
        await page.getByRole('button' , { name: 'window.prompt()'}).click();
        await expect(
            page.locator('#nativeResult')
        ).toHaveText('Prompt result: "Playwright Tester"');
    });
});