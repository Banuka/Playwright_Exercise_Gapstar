import { Locator, Page } from '@playwright/test';

export class CheckBoxesPage{
    page : Page
    chkBoxOne : Locator
    chkBoxTwo: Locator

    constructor(page1:Page){
        this.page = page1
        this.chkBoxOne = this.page.locator('#checkboxes > input[type=checkbox]:nth-child(1)')
        this.chkBoxTwo = this.page.locator('#checkboxes > input[type=checkbox]:nth-child(3)')
    }

    //Locators
    // chkBoxOne = () => this.page.locator("//input[1]")
    
    // chkBoxTwo = () => this.page.locator("//input[2]")

    public async selectCheckBoxOne() {
        if(await this.chkBoxOne.isChecked() == false){
            await this.chkBoxOne.click()
        } 
    }

    public async delectCheckBoxTwo() {
        if(await this.chkBoxTwo.isChecked() == true){
            await this.chkBoxTwo.click()
        } 
    }

}