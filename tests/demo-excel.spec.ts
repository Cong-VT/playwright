import { test, expect } from '@playwright/test';
import { resolve } from 'path';
import { excel } from '../helpers/mssexcel'
import path  from 'path';

  const Excel = new excel();

test('Down And Read headers', async ({ page }) => {    
  const filePath = path.resolve() + '/stored/download/file_example_XLSX_100.xlsx'
  await Excel.readData(filePath)
 
});
