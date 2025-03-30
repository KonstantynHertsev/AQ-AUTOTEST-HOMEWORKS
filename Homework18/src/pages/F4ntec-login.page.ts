import { BrowserContext, Locator, Page } from '@playwright/test';

export class F4ntecLoginPage {
    private page: Page;
    private context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    private get emailInput(): Locator {
        return this.page.locator('input[name="user"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('input[type="password"]');
    }

    private get loginButton(): Locator {
        return this.page.locator('button[data-auto-test="login-button"]');
    }

    private get checkButton(): Locator {
        return this.page.locator('label[for^="confirm-"]');
    }

    private get continueButton(): Locator {
        return this.page.locator('button[data-auto-test="continue-to-system-button"]');
    }

    async goto(): Promise<void> {
        try {
            await this.page.goto('https://bbstaticwebapptest.azurewebsites.net/login');
            await this.page.waitForLoadState('load');
            await this.emailInput.waitFor({ state: 'visible' });
        } catch (error) {
            console.error('Failed to navigate to login page:', error);
            throw error;
        }
    }

    async login(username: string, password: string): Promise<void> {
        try {
            await this.goto();
            await this.emailInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
            await this.page.waitForLoadState('networkidle');
            await this.checkButton.click();
            await this.continueButton.click();
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }
};
