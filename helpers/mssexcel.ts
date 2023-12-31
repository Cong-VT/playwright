import { test, expect, Page } from '@playwright/test';
import XLSX from "xlsx";
import fs from 'fs/promises';
import path from 'path';
import pdfParse from 'pdf-parse';


export class excel {

    async readData(fielPath:string) {      
        const fileContent = await fs.readFile(fielPath);      
        const extension = 'xlsx'
        if (extension === 'xlsx') {
            // If the extension is 'xlsx', process the Excel file content
            const workbook = XLSX.read(fileContent, { type: 'buffer' });
            const sheetData = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(sheetData, { header: 1 });
            // Delete the xlsx file
              // await fs.unlink(fielPath); 
            return jsonData;
          } else if (extension === 'pdf') {
            // If the extension is 'pdf', process the PDF file content
            const dataBuffer = Buffer.from(fileContent);
            const data = await pdfParse(dataBuffer);
            // Delete the pdf file
            await fs.unlink(fielPath);
            console.log(data.text)
            return data.text;
          }

    }
}