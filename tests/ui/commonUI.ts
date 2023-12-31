import {test, Page, Locator} from '@playwright/test'

export class CommonUI {
    readonly page: Page;
    readonly BTN_SUBMIT: Promise<Locator>;
    

    constructor(page: Page){   
        this.page = page;
        this.BTN_SUBMIT = this.findButtonType(CommonUI.BUTTON.SUBMIT) || null;

    }
    
    static readonly BUTTON = {
        'SUBMIT': 'Submit',
        'DISMISS': 'Cancel'
    }

    static readonly BUTTON_NAME = {
        'SUBMIT1': 'submit',
        'DISMISS': 'Cancel'
    }


    async navigateURL(URL:string){
        await this.page.goto(URL);
        await this.page.waitForLoadState('networkidle');
        await this.delay(2);        
    }

    async findButtonType(type:string){
        const element =await this.page.locator(`xpath=//button[@type='submit']`).first();
        return element;
    }

    /**
     * Delay in millisecond
     * @param milliseconds 
     */
    async delay(milliseconds:number){
        const delay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
        await delay(milliseconds);
    }

    /**
     * 
     * @param buttonName 
     */
    async findButtonName(buttonName:string){
        const element = await this.page.locator(`xpath=//button[text()='${buttonName}']`).first();
        return element;
    }

    async getErrorMessages(){
        const msgs = await this.page.locator(`xpath=//span[contains(@class,'input-field-error-message')]`).allTextContents();
        return msgs;
    }

    async getAlertMessages(){
        const msgs = await this.page.locator(`xpath=//p[contains(@class,'alert-content-text')]`).allTextContents();
        return msgs;
    }



     


}