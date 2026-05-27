import { expect, test } from '@playwright/test';
import { Login } from './Login.spec';

test('dashboard test', async ({ page }) => {

  await Login(page);
  await expect (page.getByRole('heading', {name:"Dashboard"})).toBeVisible();
  await page.locator("//p[text()='Mohammad Stanikzai']").click();
  await page.getByRole('menuitem',{name:"About"}).click();
  await expect(page.locator("//p[text()='Company Name: ']")).toHaveText("Company Name: ");
  await page.locator("//button[@class='oxd-dialog-close-button oxd-dialog-close-button-position']").click();
});