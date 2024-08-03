"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//const router = require('./router')
//const cors = require('cors')
//const app = express();
//app.use(express.json());
//app.use(cors());
//app.use(router);
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    ;
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    ;
    routes() {
        //this.app.use(router)
    }
    ;
}
;
exports.default = new App().app;
