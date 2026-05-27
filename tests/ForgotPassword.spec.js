// @ts-check
import { test, expect } from '@playwright/test';

test('ForgotPassword', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Forgot your password?').click();
  await page.getByRole('textbox', {name: "Username"}).fill("praveen");
  await page.locator("//button[@type='submit']").click();
  await expect (page.getByRole('heading',{name: "Reset Password link sent successfully"})).toBeVisible();
});


