// @ts-check
import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://devapp.rocketdeal.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Rocket Deals Admin");

  //locate element using various selector and click on it
  await page.locator("name='email'").fill("rocketdeal@gmail.com");
  await page.getByPlaceholder('Enter your password...').fill('superAdminPassword');
  await page.locator("//button[text()='Sign In']").click();

  //expect a Dashboard page is opened
  await expect(page).toHaveTitle() 
});

