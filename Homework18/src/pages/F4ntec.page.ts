import { Locator, Page } from '@playwright/test';

export class F4ntecPage {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://bbstaticwebapptest.azurewebsites.net/login');
        await this.page.waitForLoadState('load');
    }
}
