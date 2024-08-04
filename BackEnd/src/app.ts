import express, { Application } from "express";
import cors from 'cors';
import router from "./router";

class app {
    public app:Application;
    
    constructor(){
        this.app = express()
        this.middleware();
        this.routes();

    };

    middleware():void{
        this.app.use(express.json())
        this.app.use(cors());
    };

    routes():void{
        this.app.use(router);
    };


};

export default new app().app;
