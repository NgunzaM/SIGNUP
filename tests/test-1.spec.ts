import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('ers');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('tgb');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('asd@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567');
  await expect(page.locator('div')).toContainText('Sign up to begin adding your contacts!');
  await expect(page.getByRole('heading')).toContainText('Add User');
  await page.getByRole('button', { name: 'Submit' }).click();
});


await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('test@testing.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('tesing');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.locator('#error')).toContainText('Incorrect username or password');

