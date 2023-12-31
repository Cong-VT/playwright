import { test, expect } from '@playwright/test';
import { resolve } from 'path';
import { pgSQL } from '../helpers/msql'

    const sqlHelper = new pgSQL();


test('Test MSSQL', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await sqlHelper.queryData('')


});
