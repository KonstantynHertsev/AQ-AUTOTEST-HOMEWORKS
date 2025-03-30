import { $ } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public get inputUsername () {
        return $('#username');
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public get inputPassword () {
        return $('#password');
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
