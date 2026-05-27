
import { Page } from '@playwright/test';

export async function Login(page){
  await page.goto('/');
  await page.getByPlaceholder("username").fill("Admin");
  await page.getByRole('textbox',{name: "password"}).fill("admin123");
  await page.getByRole('button',{name: "Login"}).click();
}


