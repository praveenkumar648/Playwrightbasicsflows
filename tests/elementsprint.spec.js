import { test, expect } from '@playwright/test';

test('amazon', async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  //await expect(page.locator("//input[@id='twotabsearchtextbox']")).toBeVisible();
  await page.locator("//span[@id='nav-search-label-id']").click();

  await page.pause();

  const categories = await page.locator("//div[@class='nav-search-facade']").allTextContents();

  for (let i = 0; i < categories.length; i++) {
    console.log(categories[i]);
  }

  expect(categories).toContain('Video Games');
});