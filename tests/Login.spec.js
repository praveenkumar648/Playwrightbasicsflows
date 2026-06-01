import { test, expect } from '@playwright/test';

test('OrangeHRM Login Test', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').pressSequentially('Admin');

  await page.getByRole('textbox', { name: 'Password' }).pressSequentially('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

});