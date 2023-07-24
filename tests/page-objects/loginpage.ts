import { Locator, Page } from '@playwright/test';

export class LoginPage{
    page : Page
    txtUserName : Locator
    txtPassword : Locator
    btnLogin: Locator

    constructor(page1:Page){
        this.page = page1
        this.txtUserName = this.page.locator('#username')
        this.txtPassword = this.page.locator('#password')
        this.btnLogin = this.page.locator('#login > button')
    }

    public async login(uname : string, password : string) {
        await this.txtUserName.fill(uname)
        await this.txtPassword.fill(password)
        await this.btnLogin.click()
    }


}