import { Locator, Page } from '@playwright/test';

export class DragAndDropPage{
    page : Page
    elmColumnA : Locator
    elmColumnB: Locator

    constructor(page1:Page){
        this.page = page1
        this.elmColumnA = this.page.locator('#column-a')
        this.elmColumnB = this.page.locator('#column-b')
    }



}