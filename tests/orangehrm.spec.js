import { test, expect } from '@playwright/test';

test('OrangeHRM Login Test', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('link', {name: 'PIM'}).click();
await page.getByRole('link', {name: 'Add Employee'}).click();
await page.getByRole('textbox',{name: 'First Name'}).fill("Praveen");
await page.getByRole('textbox',{name: 'Middle Name'}).fill("Smart");
await page.getByRole('textbox',{name: 'Last Name'}).fill("Tester");
//await page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").click();

//await expect(page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").isChecked);

await page.getByRole('button', {name: ' Save '}).click();

await page.getByRole('link', {name: 'Employee List'}).click();

await (page.locator('.oxd-table-body')).scrollIntoViewIfNeeded();

await expect(page.locator('.oxd-table-body')).toContainText("PraveenSmart");

});