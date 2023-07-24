import { Locator, Page } from '@playwright/test';
import { CheckBoxesPage } from './checkboxespage';
import { KeyPressesPage } from './keypressespage';
import { LoginPage } from './loginpage';
import { DropDownPage } from './dropdownpage';
import { DragAndDropPage } from './draganddroppage';

export class Homepage{
    page : Page
    // linkCheckBoxes : Locator
    constructor(page:Page){
        this.page = page
        // this.linkCheckBoxes = page.locator('#content > ul > li:nth-child(6) > a')
        // this.linkKeyPresses = page.locator('#content > ul > li:nth-child(31) > a')
    }

     //Locators
     linkCheckBoxes = () => this.page.locator("#content > ul > li:nth-child(6) > a")
    
     linkKeyPresses = () => this.page.locator("#content > ul > li:nth-child(31) > a")

     linkFormAuthentication = () => this.page.locator("#content > ul > li:nth-child(21) > a")

     linkDropDown = () => this.page.locator("#content > ul > li:nth-child(11) > a")

     linkDragAndDrop = () => this.page.locator("#content > ul > li:nth-child(10) > a")

    public async clickOnCheckBoxes() : Promise<CheckBoxesPage>{
        await this.linkCheckBoxes().click()
        return new CheckBoxesPage(this.page)
    }

    public async clickOnKeyPresses() : Promise<KeyPressesPage>{
        await this.linkKeyPresses().click()
        return new KeyPressesPage(this.page)
    }

    public async clickOnFormAuthentication() : Promise<LoginPage>{
        await this.linkFormAuthentication().click()
        return new LoginPage(this.page)
    }

    public async clickOnDropDown() : Promise<DropDownPage>{
        await this.linkDropDown().click()
        return new DropDownPage(this.page)
    }

    public async clickOnDragAndDrop() : Promise<DragAndDropPage>{
        await this.linkDragAndDrop().click()
        return new DragAndDropPage(this.page)
    }
}