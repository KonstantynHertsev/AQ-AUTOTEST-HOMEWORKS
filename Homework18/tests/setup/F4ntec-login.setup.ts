import { test } from '@playwright/test';
import { F4ntecLoginPage} from '../../src/pages/F4ntec-login.page';

test.describe('F4ntec login', () => {
    test('login', async ({ page, context }) => {
        const f4ntecLoginPage = new F4ntecLoginPage(page, context);
        await f4ntecLoginPage.login('Admin1@f4ntec.com', 'F4ntec!@#');
    });
});
