import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { expect } from 'chai';

describe('Puppeteer rozetka tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://rozetka.com.ua/');
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('Check that goods has name "Аккумуляторный пылесос Bosch Unlimited 7 ProHygienic Aqua BCS71HYG2" ', async () => {
        const sideBare = '//div//aside//rz-main-page-sidebar/ul/li[4]';
        await page.waitForSelector(sideBare, { timeout: 60000 });
        await page.click(sideBare);

        const pushButton = 'a[title="Аккумуляторные пылесосы"]';
        await page.waitForSelector(pushButton);
        await Promise.all([
            page.waitForNavigation(),
            page.click(pushButton)
        ]);

        const sideBareFilter = '//rz-scrollbar//rz-filter-section-autocomplete//ul/li[1]';
        await page.waitForSelector(sideBareFilter);
        await page.click(sideBareFilter);

        const dataGood = '//div[@data-goods-id="430990055"]';
        await page.waitForSelector(dataGood);
        await Promise.all([
            page.waitForNavigation(),
            page.click(dataGood)
        ]);

        const titleSelector = '//rz-title-block//div/div//div/p';
        await page.waitForSelector(titleSelector);
        const titleElement = await page.$$(titleSelector);

        if (titleElement.length > 0) {
            const title = await page.evaluate(el => el.textContent, titleElement[0]);
            expect(title).to.include('Аккумуляторный пылесос Bosch Unlimited 7 ProHygienic Aqua BCS71HYG2');
        } else {
            throw new Error('Element not found');
        }
    });

    it ('Checking that the product has been added to the cart ', async () => {
        const sideBare = '//div//aside//rz-main-page-sidebar/ul/li[2]';
        await page.waitForSelector(sideBare, { timeout: 60000 });
        await page.click(sideBare);

        const pushButtonGoods = '//div//a[@title="Мобильные телефоны"]';
        await page.waitForSelector(pushButtonGoods);
        await page.click(pushButtonGoods);

        const pushGood = '//div[@data-goods-id="422905452"]';
        await page.waitForSelector(pushGood);
        await page.click(pushGood);

        const pushButton = '//rz-buy-button';
        await page.waitForSelector(pushButton);
        await page.click(pushButton);

        const goToBag = '//rz-header-cart';
        await page.waitForSelector(goToBag);
        await page.click(goToBag);

        await page.waitForSelector('//div[contains(@class, "cart-product")]');
        const cartProduct = await page.$$('//div[contains(@class, "cart-product")]');
        expect(cartProduct.length).to.be.greaterThan(0);
    });
});
