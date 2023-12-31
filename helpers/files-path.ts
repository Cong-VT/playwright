import XLSX from "xlsx";
import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';
import { excel } from './mssexcel'

const Excel = new excel();


export class fileHelper {

    readonly PROJECT_FOLDER = path.resolve();
    readonly PROJECT_FOLDER_STORED = this.PROJECT_FOLDER + '/stored';
    readonly PROJECT_FOLDER_DOWNLOAD = this.PROJECT_FOLDER_STORED + '/download';
    readonly PROJECT_FOLDER_CONFIG = this.PROJECT_FOLDER + '/configs/project.json'

    readJSONFile(fielPath:string){
        const rawData = fs.readFileSync(fielPath, 'utf-8');
        return JSON.parse(rawData);
    }

    async readDataExcel(fielPath:string) {      
        const data = Excel.readData(fielPath);
        return data;
    }


}