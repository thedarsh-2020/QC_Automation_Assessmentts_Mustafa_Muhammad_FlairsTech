import { expect, Page, test } from "@playwright/test";
import homePage from "./homePage/homePage";
import registerPage from "./registerPage/registerPage";
import loginPage from "./loginPage/loginPage";
import * as testData from "../testData/testData.json";


let page: Page;
let HomePage: homePage;
let RegisterPage: registerPage;
let LoginPage: loginPage;

test.beforeEach(async({browser}) =>
{
    page = await browser.newPage();
    HomePage = new homePage(page);
    RegisterPage = new registerPage(page);
    LoginPage = new loginPage(page);
    await page.goto('https://www.automationexercise.com/');
})


test.afterEach(async() =>
{
    await page.close();
})


test('User Register', async({}) =>
{
    await HomePage.clickOnsignUpAndLoginBtn();
    await HomePage.enterSignUpName(testData.name);
    await HomePage.enterSignupEmail(testData.email);
    await HomePage.clickSignUpBtn();

    await RegisterPage.clickTitleBtn();
    await RegisterPage.enterPassword(testData.password);
    await RegisterPage.selectBirthDay(testData.birth_day);
    await RegisterPage.selectBirthMonth(testData.birth_month);
    await RegisterPage.selectBirthYear(testData.birth_year);
    await RegisterPage.enterFirstName(testData.firstname);
    await RegisterPage.enterLastName(testData.lastname);
    await RegisterPage.enterCompanyName(testData.company);
    await RegisterPage.enterAddress_1(testData.address1);
    await RegisterPage.enterAddress_2(testData.address2);
    await RegisterPage.selectCountry(testData.country);
    await RegisterPage.enterState(testData.state);
    await RegisterPage.enterCity(testData.city);
    await RegisterPage.enterzipcode(testData.zipcode);
    await RegisterPage.enterMobileNuber(testData.mobile_number);
    await RegisterPage.clickCreateAccountBtn();
    await expect(RegisterPage.successSignUpMessage).toContainText('Account Created!');
    await RegisterPage.clickContinueBtn();

    await LoginPage.clickLogoutBtn();
})


test('User Login', async({}) =>
{
    await HomePage.clickOnsignUpAndLoginBtn();
    await HomePage.enterLoginEmail(testData.email);
    await HomePage.enterPassword(testData.password);
    await HomePage.clickLoginBtn();

    await LoginPage.clickLogoutBtn();
})


test('User Delete', async({}) =>
{
    await HomePage.clickOnsignUpAndLoginBtn();
    await HomePage.enterLoginEmail(testData.email);
    await HomePage.enterPassword(testData.password);
    await HomePage.clickLoginBtn();
    
    await LoginPage.clickDeleteAccountBtn();
    await expect(LoginPage.successDeletedMessage).toContainText('Account Deleted!');
    await LoginPage.clickContinueBtn();
})