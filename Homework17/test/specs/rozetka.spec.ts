import RozetkaPage from '../pageobjects/rozetka.page';
import { expect } from 'chai';

describe('Rozetka tests', () => {
    it('Check that goods has name "Аккумуляторный пылесос Bosch Unlimited 7 ProHygienic Aqua BCS71HYG2"', async () => {
        await RozetkaPage.open();
        await RozetkaPage.clickSideBarMenu();
        await RozetkaPage.clickVacuumCleanersButton();
        await RozetkaPage.clickBoshFilter();
        await RozetkaPage.clickProductBosch();

        await RozetkaPage.productTitle.waitForDisplayed();
        const title = await RozetkaPage.productTitle.getText();
        expect(title).to.include('Аккумуляторный пылесос Bosch Unlimited 7 ProHygienic Aqua BCS71HYG2');
    });

    it('Checking that the product has been added to the cart', async () => {
        await RozetkaPage.open();
        await RozetkaPage.clickSmartphonesMenu();
        await RozetkaPage.clickMobilePhonesButton();
        await RozetkaPage.clickMobilePhoneProduct();
        await RozetkaPage.clickBuyButton();
        await RozetkaPage.clickCartButton();

        await RozetkaPage.cartProduct.waitForDisplayed();
        const cartProducts = await RozetkaPage.cartProduct;
        expect(cartProducts.length).to.be.greaterThan(0);
    });
});
