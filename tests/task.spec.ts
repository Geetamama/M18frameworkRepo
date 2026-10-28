import { test, expect } from '@playwright/test';

test('Fill DemoQA Registration Form', async ({ page }) => {
  // Navigate to the form
  await page.goto('https://demoqa.com/automation-practice-form');

  // Fill text fields
  await page.fill('#firstName', 'Geetanjali');
  await page.fill('#lastName', 'Das');
  await page.fill('#userEmail', 'geetanjali@example.com');

  // Keyboard action: type phone number digit by digit
  await page.locator('#userNumber').pressSequentially('9876543210');

  // Mouse action: click on gender radio button
  await page.locator('label[for="gender-radio-2"]').click(); // Female

  // Mouse action: select hobbies checkbox
  await page.locator('label[for="hobbies-checkbox-1"]').click(); // Sports

  // Keyboard action: press Tab and Enter to submit
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');

  // Assertions
  await expect(page.locator('#firstName')).toHaveValue('Geetanjali'); // Assertion 1
  await expect(page.locator('#lastName')).toHaveValue('Das');       // Assertion 2
  await expect(page.locator('#userEmail')).toHaveValue('geetanjali@example.com'); // Assertion 3
  await expect(page.locator('#userNumber')).toHaveValue('9876543210'); // Assertion 4

  // Optional: Verify modal appears after submission
  await expect(page.locator('.modal-content')).toBeVisible();
});