class AddContactPage{
    constructor(page){
        this.page=page;
        this.firstNameInput=page.getByRole('textbox', { name: '* First Name:' });
        this.lastNameInput=page.getByRole('textbox', { name: '* Last Name:' });
        this.emailInput=page.getByRole('textbox', { name: '* Email:' });
        this.phoneNumberInput=page.getByRole('textbox', { name: '* Phone:' });
        this.addressInput1=page.getByRole('textbox', { name: '* Address Line 1:' });
        this.addressInput2=page.getByRole('textbox', { name: 'Address Line 2:' });
        this.cityInput=page.getByRole('textbox', { name: '* City:' });
        this.stateInput=page.getByRole('textbox', { name: 'State or Province:' });
        this.postalCodeInput=page.getByRole('textbox', { name: 'Postal Code:' });
        this.countryInput=page.getByRole('textbox', { name: 'Country:' });
        this.submitButton=page.getByRole('button',{name: 'Submit'});
    }

    async fillFormAddContact(firstName, lastName, email, phoneNumber, address1, address2, city, state, postalCode, country) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.phoneNumberInput.fill(phoneNumber);
        await this.addressInput1.fill(address1);
        await this.addressInput2.fill(address2);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.postalCodeInput.fill(postalCode);
        await this.countryInput.fill(country);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}module.exports={AddContactPage};