import {test, expect} from '@playwright/test';

test('file upload', async({page}) => {
  await page.goto("https://demoqa.com/upload-download");
  await page.locator("//input[@id='uploadFile']").setInputFiles('/Users/praveenananthakumar/Desktop/Playwright Basics/Screenshot 2026-05-25 at 9.21.29 PM.png');
  await expect(page.locator("//p[@id='uploadedFilePath']")).toContainText('Screenshot 2026-05-25 at 9.21.29 PM.png');

});