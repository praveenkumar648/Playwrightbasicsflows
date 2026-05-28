import { test, expect } from '@playwright/test';
//import { Login } from './Login.spec';

/*test.beforeAll(async ({ page }) => {
  await Login(page);
});*/

test.beforeEach(async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
console.log("Before Each");
//await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
});

test.afterEach(async ({ page }) => {
/*await page.getByRole('link',{name: 'Dashboard'}).click();
await page.locator("//i[@class='oxd-icon bi-stopwatch']").click();
await page.getByRole('button', {name:'In'}).click();
await page.locator("//span[text()='Dashboard']").click();
await expect(page.locator("//p[@class='oxd-text oxd-text--p orangehrm-attendance-card-state']")).toContainText("Punched Out");
console.log("After Each");*/
await page.getByRole('link', {name: 'Dashboard'}).click();
await page.locator("//p[@class='oxd-userdropdown-name']").click();
await page.getByRole('menuitem', { name: 'Logout' }).click();
console.log("After Each");
});


test('employeeadding', async ({ page }) => {
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Praveen');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('GeekyAnts');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Coordinator');
  await page.getByRole('textbox').nth(4).fill('1111112');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();
  console.log("First Test successfull");
  //await page.getByRole('button', { name: '4' }).click();
  //await page.keyboard.press('PageUp');
  //await expect(page.locator('.oxd-table-body')).toContainText("Praveen test");
});

test('Maintanance', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Maintenance' })).toBeVisible();
  await page.getByRole('link', { name: 'Maintenance' }).click();
  await page.locator("//input[@name='password']").fill("admin123");
  await page.getByRole('button',{name: 'Confirm'}).click();
  await expect(page.getByRole('heading',{name: 'Maintenance'})).toContainText("Maintenance");
  console.log("Second Test Successfull");
});

