import {Page, Locator} from '@playwright/test'
import { CommonUI } from '../ui/commonUI'
import { Container } from '../../helpers/container'

 const _Container = new Container();

export class LoginPage extends CommonUI{

    async openURL(url:string){
        await this.navigateURL(url)
    }

    async inputAccount(user:string, password:string){
        await this.page.locator('#loginusername').fill(user);        
        await this.page.locator('#loginpassword').fill(password);        
    }

    async login(user:string, password:string){
        await this.openURL(_Container.getConfig('base-url'));
        await this.page.locator('#login2').click();        
        await this.inputAccount(user, password);
        (await this.findButtonName('Log in')).click();
        await this.page.waitForLoadState('networkidle');
    }

    


}