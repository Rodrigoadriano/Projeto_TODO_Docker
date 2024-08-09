import { Request, Response } from 'express';

class middleware {

    titleValidade =(req:Request, res:Response , nxt:Function)=>{
        const { body } = req;
        
        
        if (body.title === undefined) {
    
            return res.status(400).send({'MessageError': 'The Field title is required'});
        };
        
        if (body.title === "") {
            return res.status(400).send({'MessageError': 'title cannot be empty'});
        };
        
    
    
    
        nxt();
    
    };
    
    statusValidade =(req:Request, res:Response , nxt:Function)=>{
        const { body } = req;
        
        
        if (body.status === undefined) {
    
            return res.status(400).send({'MessageError': 'The Field status is required'});
        };
        
        if (body.status === "") {
            return res.status(400).send({'MessageError': 'Status cannot be empty'});
        };
        
    
    
    
        nxt();
    
    };    

};

export default new middleware();