import { Locator, Page } from '@playwright/test';

export class DropDownPage{
    page : Page
    dropDownList : Locator

    constructor(page1:Page){
        this.page = page1
        this.dropDownList = this.page.locator('#dropdown')
    }

    public async selectDropDown(option: string) {
        await this.dropDownList.selectOption(option)
    }


}