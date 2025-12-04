import basePage from "../basePage";

export default class homePage extends basePage
{
    private readonly signUpAndLoginBtn = this.page.getByRole('link', {name: 'Signup / Login'});
    private readonly emailLoginField = this.page.locator('[data-qa="login-email"]');
    private readonly passwordField = this.page.locator('[name = "password"]');
    private readonly loginBtn = this.page.locator('[data-qa="login-button"]');
    private readonly nameField = this.page.locator('[data-qa="signup-name"]');
    private readonly signUpEmailField = this.page.locator('[data-qa="signup-email"]');
    private readonly signupBtn = this.page.locator('[data-qa="signup-button"]');

    async clickOnsignUpAndLoginBtn()
    {
        await this.clickOnElement(this.signUpAndLoginBtn);
    }

    async enterLoginEmail(email: string)
    {
        await this.enterTextToElement(this.emailLoginField, email);
    }

    async enterPassword(password: string)
    {
        await this.enterTextToElement(this.passwordField, password);
    }

    async clickLoginBtn()
    {
        await this.clickOnElement(this.loginBtn);
    }

    async enterSignUpName(name: string)
    {
        await this.enterTextToElement(this.nameField, name);
    }

    async enterSignupEmail(email: string)
    {
        await this.enterTextToElement(this.signUpEmailField, email);
    }

    async clickSignUpBtn()
    {
        await this.clickOnElement(this.signupBtn);
    }
}