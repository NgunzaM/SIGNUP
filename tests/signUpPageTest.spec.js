import {test , expect} from '@playwright/test';
import { SignUpPage } from '../pages/signUpPage';
import {testData} from '../data/testData';

test.describe('Sign Up Page Tests', () => {

test('SuccessfulSign Up Page Test', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.goto();
  await signUpPage.clickSignUpButton();
  await expect(page.locator('div')).toContainText('Sign up to begin adding your contacts!');
  await signUpPage.fillForm(
    testData.validUser.firstName,
    testData.validUser.lastName,
    testData.validUser.email,
    testData.validUser.password
  );
  await signUpPage.submitForm();
});
});

