import {test as baseTest} from '@playwright/test';
import homePage from '../tests/pages/homePage/homePage';
import loginPage from '../tests/pages/loginPage/loginPage';
import registerPage from '../tests/pages/registerPage/registerPage';


type pages = 
{
    homePage        : homePage;
    loginPage       : loginPage;
    registerPage    : registerPage;
}


const testPages = baseTest.extend<pages>
({
    homePage: async({page}, use) =>
    {
        await use(new homePage(page))
    },
    loginPage: async({page}, use) =>
    {
        await use(new loginPage(page))
    },
    registerPage: async({page}, use) =>
    {
        await use(new registerPage(page))
    }
})


export const test = testPages;
export const expect = testPages.expect;