import { test, expect } from '@playwright/test';

test('amazon', async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await expect(page.locator("//input[@id='twotabsearchtextbox']")).toBeVisible();
  await page.locator("//span[text()='All Categories']").click();

  const categories = await page.locator("//div[@class='nav-search-facade']").allTextContents();

  for (let i = 0; i < categories.length; i++) {
    console.log(categories[i]);
  }

  expect(categories).toContain('Video Games');
});