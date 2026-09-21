// @ts-check
import { test, expect } from '@playwright/test';

test('Validate login successful', async ({ page }) => {
  await page.goto('https://devapp.rocketdeal.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Rocket Deals Admin");

  //locate element using various selector and click on it
  await page.locator("[name='email']").fill("rocketdeal@gmail.com");
  await page.getByPlaceholder('Enter your password...').fill('superAdminPassword');
  await page.locator("//button[text()='Sign In']").click();

  //expect a Dashboard page is opened
  //as pagename is same as on login window, so validating 'Logout button is displayed'
  expect(await page.locator("text =Logout").isVisible()).toBeTruthy();

});

