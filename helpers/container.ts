import { fileHelper } from '../helpers/files-path'

const FileHelper = new fileHelper();


export class Container extends fileHelper{

    getConfig(configName: string){
        const datas = FileHelper.readJSONFile(FileHelper.PROJECT_FOLDER_CONFIG);      
        return datas.demo[configName];
    }

    
}