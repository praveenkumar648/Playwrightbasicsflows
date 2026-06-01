
import {test} from '@playwright/test';

test('Filefunctions', async ({page}) => {

    await page.goto("https://demoqa.com/upload-download");
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name: "Download"}).click();
    const download = await downloadPromise;
    console.log("The downloaded file is:", await download.suggestedFilename());

    
})