import { test, expect } from '@playwright/test';
import orangeData from '../Fixtures/orangedata.json';

orangeData.users.forEach((user) => {

    test(`Login Test - ${user.username} - ${user.expectedResult}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.locator('input[name="username"]').fill(user.username);

        await page.locator('input[name="password"]').fill(user.password);

        await page.locator('button[type="submit"]').click();

        if (user.expectedResult === 'Success') {

            await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        } else {
            await expect(
            page.locator("//p[text()='Invalid credentials']")).toBeVisible();

        }

    });

});