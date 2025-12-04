import basePage from "../basePage";

export default class registerPage extends basePage
{
    private readonly titleBtn = this.page.locator('[id = "id_gender1"]');
    private readonly nameField = this.page.locator('[id = "name"]');
    private readonly passwordField = this.page.locator('[id = "password"]');
    private readonly birthDayDropDown = this.page.locator('[id = "days"]');
    private readonly birthMonthDropDown = this.page.locator('[id = "months"]');
    private readonly birthYearhDropDown = this.page.locator('[id = "years"]');
    private readonly firstNameField = this.page.locator('[id = "first_name"]');
    private readonly lastNameField = this.page.locator('[id = "last_name"]');
    private readonly companyField = this.page.locator('[id = "company"]');
    private readonly address_1Field = this.page.locator('[id = "address1"]');
    private readonly address_2Field = this.page.locator('[id = "address2"]');
    private readonly countryDropDown = this.page.locator('[id = "country"]');
    private readonly stateField = this.page.locator('[id = "state"]');
    private readonly cityField = this.page.locator('[id = "city"]');
    private readonly zipcodeField = this.page.locator('[id = "zipcode"]');
    private readonly mobileNumberField = this.page.locator('[id = "mobile_number"]');
    private readonly createAccountBtn = this.page.locator('[data-qa = "create-account"]');
    public readonly successSignUpMessage = this.page.locator('[data-qa = "account-created"]');
    private readonly continueBtn = this.page.locator('[data-qa = "continue-button"]');
    private readonly logoutBtn = this.page.getByRole('link', {name: 'Logout'});

    async clickTitleBtn()
    {
        await this.clickOnElement(this.titleBtn);
    }

    async enterName(name: string)
    {
        await this.enterTextToElement(this.nameField, name);
    }

    async enterPassword(password: string)
    {
        await this.enterTextToElement(this.passwordField, password);
    }

    async selectBirthDay(day: number)
    {
        await this.birthDayDropDown.selectOption(day.toString());
    }

    async selectBirthMonth(month: string)
    {
        await this.birthMonthDropDown.selectOption(month.toString());
    }

    async selectBirthYear(year: number)
    {
        await this.birthYearhDropDown.selectOption(year.toString());
    }

    async enterFirstName(firstName: string)
    {
        await this.enterTextToElement(this.firstNameField, firstName);
    }

    async enterLastName(lastName: string)
    {
        await this.enterTextToElement(this.lastNameField, lastName);
    }

    async enterCompanyName(name: string)
    {
        await this.enterTextToElement(this.companyField, name);
    }

    async enterAddress_1(name: string)
    {
        await this.enterTextToElement(this.address_1Field, name);
    }

    async enterAddress_2(name: string)
    {
        await this.enterTextToElement(this.address_2Field, name);
    }

    async selectCountry(country: string)
    {
        await this.countryDropDown.selectOption(country.toString());
    }

    async enterState(name: string)
    {
        await this.enterTextToElement(this.stateField, name);
    }

    async enterCity(name: string)
    {
        await this.enterTextToElement(this.cityField, name);
    }

    async enterzipcode(name: number)
    {
        await this.enterTextToElement(this.zipcodeField, name);
    }

    async enterMobileNuber(name: number)
    {
        await this.enterTextToElement(this.mobileNumberField, name);
    }

    async clickCreateAccountBtn()
    {
        await this.clickOnElement(this.createAccountBtn);
    }

    async clickContinueBtn()
    {
        await this.clickOnElement(this.continueBtn);
    }
}