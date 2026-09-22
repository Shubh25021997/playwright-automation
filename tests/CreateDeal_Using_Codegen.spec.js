// @ts-check
import { test, expect } from '@playwright/test';

test.only('Create deal test case resolved using codegen', async ({ page }) => {

  const productName = "iphone 17 - HQ";
  const dealPrice = "51000";
  const startTime = "09:15 PM";  //use split method and provide time values from here
  const  dealName = "Script Deal - iphone 17";
  const minOrderQuantity = "10";
  const maxOrderQuantity = "20";
  const totalQuantity = "50";

  await page.goto('https://devapp.rocketdeal.in/');
  await page.getByRole('textbox', { name: 'Email' }).fill('rocketdeal@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password...' }).fill('superAdminPassword');
  await page.getByRole('button', { name: 'Sign In' }).click();

    //Create new deal
  await page.getByRole('button', { name: 'Add Deal' }).click();
  await page.getByRole('textbox', { name: 'Search products by name, SKU' }).fill(productName);
  await page.getByRole('heading', { name: 'iphone 17 - HQ' }).click();
  await expect(page.locator(".px-6 h4")).toContainText(productName);
  await page.getByRole('spinbutton', { name: 'Deal Price (₹) *' }).fill(dealPrice);
  await page.getByRole('combobox').filter({ hasText: 'No' }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByRole('spinbutton', { name: 'Logistic Cost (₹)' }).fill('500');
  await page.getByRole('textbox', { name: 'Title *' }).fill(dealName);
  await page.getByRole('spinbutton', { name: 'Min Order Quantity *' }).fill(minOrderQuantity);
  await page.getByRole('checkbox', { name: 'Deal of the Day' }).click();
  await page.getByRole('button', { name: 'Select start date & time' }).click();
  await page.getByRole('button', { name: 'Tuesday, September 22nd,' }).click();
  await page.getByRole('button', { name: '10' }).nth(1).click();
  await page.getByRole('button', { name: '00', exact: true }).click();
  await page.getByRole('button', { name: 'Select end date & time' }).click();
  await page.getByRole('button', { name: 'Wednesday, September 23rd,' }).click();
  await page.getByRole('button', { name: '10' }).nth(2).click();
  await page.getByRole('button', { name: '00', exact: true }).click();
  await page.getByRole('spinbutton', { name: 'Max Order Quantity *' }).fill(maxOrderQuantity);
  await page.getByRole('spinbutton', { name: 'Total Quantity *' }).fill(totalQuantity);
  await page.getByRole('combobox').filter({ hasText: 'Select a warehouse' }).click();
  await page.getByRole('option', { name: 'Nashik Warehouse' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select seller' }).click();
  await page.getByRole('option', { name: 'RIPL Test - Pune' }).click();
  await page.getByRole('checkbox', { name: 'POCO_Saler' }).click();
  await page.getByRole('button', { name: 'Save changes' }).click();

  //verify deal created successfully
  await expect(page.locator('tbody tr').first()).toContainText(dealName);
  await expect(page.locator('tbody tr').first()).toContainText('Nashik Warehouse');
  // await expect(page.locator('tbody tr').first()).toContainText(dealPrice);
  // await expect(page.locator('tbody tr').first()).toContainText(minOrderQuantity);
  // await expect(page.locator('tbody tr').first()).toContainText(maxOrderQuantity);
  // await expect(page.locator('tbody tr').first()).toContainText(totalQuantity);
  await page.getByRole('button', { name: 'Approve' }).click();
  await expect(page.locator('tbody tr').first()).toContainText('APPROVED');

})