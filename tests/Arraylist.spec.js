import { test, expect } from '@playwright/test';
import testData from '../Fixtures/testdata.json';

test('Amazon single product add to cart', async ({ page }) => {

  // Take only first product
  const product = testData.products[0];

  await page.goto('https://www.amazon.in');

  // Login
  await page.locator("//span[text()='Hello, sign in']").click();
  await page.locator("//input[@id='ap_email_login']").fill(testData.credentials.username);

  await page.getByRole('button', {name: 'Continue'}).click();

  await page.locator("//input[@name='password']").fill(testData.credentials.password);

  await page.getByRole('button', {name: 'Sign in'}).click();

  // Search product
  await page.fill('#twotabsearchtextbox', product.name);
  await page.keyboard.press('Enter');
  // Open first product
  await page.locator('//div[@data-component-type="s-search-result"]').first().click();

  // Add to cart
  await page.getByRole('button',{name: 'Add to cart'}).first().click();

  // Go to cart
  await page.click('#nav-cart');

  // Validate product in cart
  await expect(page.locator("//span[@id='sc-buy-box-ptc-button']")).toBeVisible();

});