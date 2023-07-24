import { Locator, Page } from '@playwright/test';

export class KeyPressesPage{
    page : Page
    txtBox : Locator
    lblResult: Locator

    constructor(page1:Page){
        this.page = page1
        this.txtBox = this.page.locator('#target')
        this.lblResult = this.page.locator('#result')
    }

    public async pressKey(key: string) {
        await this.txtBox.click()
        await this.page.keyboard.press(key)
    }


}