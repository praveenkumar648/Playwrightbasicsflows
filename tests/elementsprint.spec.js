import{test,expect} from '@playwright/test';

test('amazon', async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.locator("//i[@class='nav-icon']").click();

  const categories = page.locator("//div[@class='nav-search-facade']").allTextContents();
  
  for(let i=0;I<(await categories).length;I++){
    console.log(categories[i]);
  }
  await expect(categories).toContain('Video Games');

});