import { Client } from 'pg';

export class pgSQL {

    DBConfig = {
        user: "qcpro.vn88@gmail.com",
        host: "s:hellen",
        database: "",
        password: "",
        idleTimeOutMillis: 30000,
        connectionTimOut: 2000,
    }

    async queryData(query:string) {

        const client = new Client(this.DBConfig);
        await client.connect();
        const result = await client.query(`SELECT * from demo where ID = '5'`);
        console.log(result);
        await client.end();

    }
}
