import {ContactListPage} from ('../pages/contactListPage');
import {test , expect} from ('@playwright/test');
//const {testData}=require('../data/testData');

test.describe('Contact List Page Tests', () => {
  test('View Contact List', async ({ page }) => {
    const contactListPage = new ContactListPage(page);

    await expect(page.getByRole('heading')).toContainText('Contact List');
    await expect(page.locator('#add-contact')).toContainText('Add a New Contact');
    await contactListPage.clickAddANewContactButton();
  });
});