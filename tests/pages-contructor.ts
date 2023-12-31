import exp from 'constants';
import { test  as Test} from '@playwright/test';
import {CommonUI } from '../tests/ui/commonUI';
import { LoginPage } from '../tests/ui/login-page';

export const test = Test.extend<{
    loginPage: LoginPage;
    commonUI: CommonUI;

}>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },
    commonUI: async({page}, use) => {
        await use(new CommonUI(page));
    }

})