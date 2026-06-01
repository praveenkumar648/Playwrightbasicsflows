import { test, expect } from '@playwright/test';

//test('alerts', async{page} => {
test('alerts', async ({page}) => {

await page.goto("https://demoqa.com/alerts");
//await page.locator("//div[text()='Alerts, Frame & Windows']").click();
//await page.locator("//span[text()='Alerts']").click();
page.on('dialog', async dialog => {
 
    console.log("The message is:", dialog.message());
    await dialog.accept('Praveen');
})
await page.locator("//button[text()='Click me']").first().click();
await page.locator("//button[text()='Click me']").nth(1).click();
await page.locator("//button[text()='Click me']").nth(2).click();
await page.locator("//button[@id='promtButton']").click();
await page.waitForTimeout(6000);
const text = await page.locator("//span[@id='promptResult']").textContent();
console.log(text);
await expect(page.locator("//span[@id='promptResult']")).toContainText("Praveen");

});


