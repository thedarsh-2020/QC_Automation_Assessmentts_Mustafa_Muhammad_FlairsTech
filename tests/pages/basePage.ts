import {Locator, Page} from '@playwright/test'

export default class basePage
{
    protected readonly page:Page;
    constructor(page:Page)
    {
        this.page = page;
    }

    protected async clickOnElement(element: Locator)
    {
        await element.click();
    }

    protected async enterTextToElement(element: Locator, text: string | number)
    {
        await element.fill(text.toString());
    }
}