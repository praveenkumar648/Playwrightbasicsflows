import {test,expect} from '@playwright/test';
import { pathToFileURL } from 'node:url';

test('draganddrop', async ({page}) => {

await page.goto("https://demoqa.com/dragabble");
await page.locator("//div[text()='Interactions']").click();
await page.getByRole('tab', {name: 'Axis Restricted'}).click();
//await page.locator("//span[text()='Droppable']").click();
await page.locator("//div[text()='Only X']").dragTo(page.locator("//div[text()='Only Y']"));
await page.getByRole('tab', {name:'Simple'}).click();
const option = await page.locator("//div[@id='dragBox']");
const box = await option.boundingBox();
console.log(box);
await option.hover();
await page.mouse.down();
await page.mouse.move(300, 300);
await page.mouse.up();
});