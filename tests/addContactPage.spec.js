import {AddContactPage} from '../pages/addContactPage';
import {test , expect} from '@playwright/test';
import {testData} from '../data/testData';

test.describe('Add Contact Page Tests', () => {
  test('Add Contact Test successfully ', async ({ page }) => {
    const addContactPage = new AddContactPage(page);

    await addContactPage.fillFormAddContact(
      testData.contactUser.firstName,
      testData.contactUser.lastName,
      testData.contactUser.email,
      testData.contactUser.phoneNumber,
      testData.contactUser.address1,
      testData.contactUser.address2,
      testData.contactUser.city,
      testData.contactUser.state,
      testData.contactUser.postalCode,
      testData.contactUser.country
    );

    await addContactPage.submitForm();  
    console.log('Contact added successfully');
    console.log('First Name:', testData.contactUser.firstName);
    console.log('Last Name:', $);


  });

});