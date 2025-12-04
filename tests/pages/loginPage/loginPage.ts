import basePage from "../basePage";

export default class loginPage extends basePage
{
    private readonly logoutBtn = this.page.getByRole('link', {name: 'Logout'});
    private readonly deleteAccountBtn = this.page.getByRole('link', {name: 'Delete Account'});
    public readonly successDeletedMessage = this.page.locator('[data-qa = "account-deleted"]');
    private readonly continueBtn = this.page.getByRole('link', {name: 'Continue'});

    async clickLogoutBtn()
    {
        await this.clickOnElement(this.logoutBtn);
    }

    async clickDeleteAccountBtn()
    {
        await this.clickOnElement(this.deleteAccountBtn);
    }

    async clickContinueBtn()
    {
        await this.clickOnElement(this.continueBtn);
    }
}