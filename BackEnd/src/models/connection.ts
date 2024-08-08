import mysql, {Pool} from 'mysql2/promise';
require('dotenv').config();


interface Iconexao{
    HOST: string;
    USER: string;
    PASS: string;
    DB: string;
    pool:Pool
};

class cnx implements Iconexao {
    HOST: string;
    USER: string;
    PASS: string;
    DB: string;
    pool: Pool;

    constructor() {
        this.HOST = process.env.SQL_HOST || '';
        this.USER = process.env.SQL_USER || '';
        this.PASS = process.env.SQL_PASS || '';
        this.DB = process.env.SQL_DB || '';
        this.pool = mysql.createPool({
            host: this.HOST,
            user: this.USER,
            password: this.PASS,
            database: this.DB
        });

    }
}


export default new cnx().pool;
