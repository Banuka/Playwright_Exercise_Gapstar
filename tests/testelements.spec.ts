import { test, expect } from '@playwright/test';
import { Homepage } from './page-objects/homepage';
import { CheckBoxesPage } from './page-objects/checkboxespage';
import { KeyPressesPage } from './page-objects/keypressespage';
import { LoginPage } from './page-objects/loginpage';
import { DropDownPage } from './page-objects/dropdownpage';
import { DragAndDropPage } from './page-objects/draganddroppage';


var homepage : Homepage
var checkboxespage : CheckBoxesPage
var keypressespage : KeyPressesPage
var loginpage : LoginPage
var dropdownpage : DropDownPage
var draganddroppage : DragAndDropPage

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  homepage = new Homepage(page)
})

test('Test CheckBoxes', async ({ page }) => {
  checkboxespage = await homepage.clickOnCheckBoxes()
  checkboxespage.selectCheckBoxOne()
  await checkboxespage.delectCheckBoxTwo()
  expect(checkboxespage.chkBoxOne.isChecked()).toBeTruthy()
  expect(await checkboxespage.chkBoxTwo.isChecked()).toBeFalsy()
});


test('Test Key Presses', async ({ page }) => {
  keypressespage = await homepage.clickOnKeyPresses()
  await keypressespage.pressKey('A')
  expect(await keypressespage.lblResult.textContent()).toEqual('You entered: A')
});

test('Test Form Authentication Successful login', async ({ page }) => {
  loginpage = await homepage.clickOnFormAuthentication()
  await loginpage.login('tomsmith','SuperSecretPassword!')
  expect(await loginpage.page.locator('//*[@id="content"]/div/a').isVisible()).toBeTruthy()
});

test('Test DropDown', async ({ page }) => {
  dropdownpage = await homepage.clickOnDropDown()
  await dropdownpage.selectDropDown('Option 2')
  expect(await dropdownpage.dropDownList.locator('option[selected="selected"]').textContent()).toEqual('Option 2')
});

test('Test Drag And Drop', async ({ page }) => {
  draganddroppage = await homepage.clickOnDragAndDrop()
  await draganddroppage.elmColumnA.dragTo(draganddroppage.elmColumnB)
  expect(await draganddroppage.elmColumnA.locator('header').textContent()).toEqual('B')
  expect(await draganddroppage.elmColumnB.locator('header').textContent()).toEqual('A')
});


// test.afterAll(async({page}) => {
//   await page.close()
// })


