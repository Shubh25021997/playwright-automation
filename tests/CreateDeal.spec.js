// @ts-check
import { test, expect } from '@playwright/test';

test.only('Create deal', async ({ page }) => {

  const productName = "iphone 17 - HQ";
  const dealPrice = "51000";
  const startTime = "09:15 PM";  //use split method and provide time values from here
  await page.goto('https://devapp.rocketdeal.in/');
  await expect(page).toHaveTitle("Rocket Deals Admin");
  await page.locator("[name='email']").fill("rocketdeal@gmail.com");
  await page.getByPlaceholder('Enter your password...').fill('superAdminPassword');
  await page.locator("//button[text()='Sign In']").click();

  //Create new deal
  await page.locator("text =Add Deal").click();

  //search and select product
  await page.locator("[placeholder*='Search products']").fill(productName);
  //await page.locator(".p-0 [alt='iphone 17 - HQ']").waitFor();   
  //if auto wait works for this then no need of above step
  await page.locator(".p-0 [alt='iphone 17 - HQ']").click();
  await expect(page.locator("h4:has-text('iphone 17 - HQ')")).toHaveText(productName);

  //fill the form details
  await page.locator("#dealPrice").fill(dealPrice);
  const deliverySelectBox = page.locator("//label[contains(text(),'doorstep')]/..");
  await deliverySelectBox.locator("button").click();
  await deliverySelectBox.locator("select").selectOption('true');
  await page.locator("#title").fill("Script Deal - iphone 17");
  await page.pause();
  await page.locator("#minOrderQuantity").clear();
  await page.locator("#minOrderQuantity").fill("20");
  await page.locator("#isDealOfTheDay").click();  //check menthod to be used only when element has input[type=checkbox], input[type=radio] and [role=checkbox].
  const timeLocator = page.locator("//div[contains(@class,'flex')]//div[@data-slot='scroll-area']");

  //select start time
  await timeLocator.locator("button[text()='9']").click();      //Hour selector
  await timeLocator.locator("button[text()='15']").click();     //Minute selector
  await timeLocator.locator("button[text()='PM']").click();     //AM/PM selector

})