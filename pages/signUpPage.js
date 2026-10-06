class SignUpPage {
  
  constructor(page) {
    this.page = page;
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.firstNameInput=page.locator('input[id="firstName"]');
    this.lastNameInput=page.locator('input[id="lastName"]');
    this.emailInput=page.locator('input[id="email"]');
    this.passwordInput=page.locator('input[id="password"]');
    this.submitButton=page.getByRole('button',{name: 'Submit'});
}

async goto() {
    await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }

async fillForm(firstName, lastName, email, password) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async submitForm() {
    await this.submitButton.click();
  }

}
module.exports = { SignUpPage };