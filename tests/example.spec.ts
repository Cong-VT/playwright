import { expect } from '@playwright/test';
import { test } from '../tests/pages-contructor';
import { CommonUI } from './ui/commonUI';
import { Container } from '../helpers/container'
import { log } from 'console';
import { fileHelper } from '../helpers/files-path';

const _Container = new Container();
const _FileHelper = new fileHelper();


test.describe("Test Demo", () => {
  test.beforeAll(async () => {
    console.log('Start Test: Test Demo')
  });

  test.beforeEach(async ({ page }, testInfor) => {
    console.log(`Executing ${testInfor.title}`);
  });

  test.afterEach(async ({ page }, testInfor) => {
    console.log(`Completed ${testInfor.title}`);
  });

  test('Start test 1: without User/Password', async ({ page, loginPage, commonUI }) => {
    //Log in without user/password    
    await loginPage.login('', '');

    //get message in dialog
    let strDialogMessage: string
    page.on('dialog', async dialog => {
      // Verify type of dialog
      expect(dialog.type()).toContain('alert');

      // expect(dialog.message())
      strDialogMessage = dialog.message();
      expect(strDialogMessage).toBe('Please fill out Username and Password.')

      //click on alert ok button
      await dialog.accept();
    });
  })

  test('Start test 1: wrong password using excel', async ({ page, loginPage, commonUI }) => {
    //Read data excel
    const dataFile =await _FileHelper.PROJECT_FOLDER_STORED + '/datas/accountList.xlsx'
    const pws =await _FileHelper.readDataExcel(dataFile);
    const pw =await pws[1][2]    

    //Log in without user/password    
    await loginPage.login(_Container.getConfig('prj_user'), pw);

    //get message in dialog
    let strDialogMessage: string
    page.on('dialog', async dialog => {
      // Verify type of dialog
      expect(dialog.type()).toContain('alert');

      // expect(dialog.message())
      strDialogMessage = dialog.message();
      expect(strDialogMessage).toBe('Wrong password.')

      //click on alert ok button
      await dialog.accept();
    });
  })

})






