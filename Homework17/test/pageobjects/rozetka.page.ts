import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

class RozetkaPage {
    private get sideBarMenu(): ChainablePromiseElement {
        return $('//div//aside//rz-main-page-sidebar/ul/li[4]');
    }
    private get vacuumCleanersButton(): ChainablePromiseElement {
        return $('a[title="Аккумуляторные пылесосы"]');
    }
    private get boshFilter(): ChainablePromiseElement {
        return $('//rz-scrollbar//rz-filter-section-autocomplete//ul/li[1]');
    }
    private get productBosch(): ChainablePromiseElement {
        return $('div[data-goods-id="430990055"]');
    }
    private get productTitle(): ChainablePromiseElement {
        return $('//rz-title-block//div/div//div/p');
    }
    private get smartphonesMenu(): ChainablePromiseElement {
        return $('//div//aside//rz-main-page-sidebar/ul/li[2]');
    }
    private get mobilePhonesButton(): ChainablePromiseElement {
        return $('//div//a[@title="Мобильные телефоны"]');
    }
    private get mobilePhoneProduct(): ChainablePromiseElement {
        return $('div[data-goods-id="422905452"]');
    }
    private get buyButton(): ChainablePromiseElement {
        return $('rz-buy-button');
    }
    private get cartButton(): ChainablePromiseElement {
        return $('rz-header-cart');
    }
    private get cartProduct(): ChainablePromiseElement {
        return $('div[contains(@class, "cart-product")]');
    }

    private async open(): Promise<void> {
        await browser.url('https://rozetka.com.ua/');
    }

    private async clickSideBarMenu(): Promise<void> {
        await this.sideBarMenu.waitForClickable({ timeout: 60000 });
        await this.sideBarMenu.click();
    }

    private async clickVacuumCleanersButton(): Promise<void> {
        await this.vacuumCleanersButton.waitForClickable();
        await this.vacuumCleanersButton.click();
    }

    private async clickBoshFilter(): Promise<void> {
        await this.boshFilter.waitForClickable();
        await this.boshFilter.click();
    }

    private async clickProductBosch(): Promise<void> {
        await this.productBosch.waitForClickable();
        await this.productBosch.click();
    }

    private async clickSmartphonesMenu(): Promise<void> {
        await this.smartphonesMenu.waitForClickable({ timeout: 60000 });
        await this.smartphonesMenu.click();
    }

    private async clickMobilePhonesButton(): Promise<void> {
        await this.mobilePhonesButton.waitForClickable();
        await this.mobilePhonesButton.click();
    }

    private async clickMobilePhoneProduct(): Promise<void> {
        await this.mobilePhoneProduct.waitForClickable();
        await this.mobilePhoneProduct.click();
    }

    private async clickBuyButton(): Promise<void> {
        await this.buyButton.waitForClickable();
        await this.buyButton.click();
    }

    private async clickCartButton(): Promise<void> {
        await this.cartButton.waitForClickable();
        await this.cartButton.click();
    }
}

export default new RozetkaPage();
