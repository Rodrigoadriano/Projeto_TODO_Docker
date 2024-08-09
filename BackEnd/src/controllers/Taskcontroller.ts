import TaskModels from '../models/taskModels';
import { Request, Response } from 'express';

class taskController {

    getAll = async (_req:Request, res:Response)=> {
        try {
            const tks = await  TaskModels.getAll();
            console.log('Conexão DB: Ok!')
            return res.status(200).json(tks);
        } catch (err:any){
            console.log('Conexão DB: Falhou,:' , err.code)
            return res.status(500).json({error: err.code}).send();
    
        };
        };
    CreateTask = async(req:Request, res:Response)=>{
        try {
            const tks = await TaskModels.creationTask(req.body);
            return  res.status(201).json(tks);
            } catch (err:any){
            console.log('Meu Erro' , err.code)
            return res.status(500).json({error: err.code});
            };
    };    

     deleteTask = async (req:Request, res:Response)=>{
        const {id} = req.params;
    
        await TaskModels.deleteTask(id);
        return res.status(200).json(`ID ${id} deleted!`)
    };
     updateTask = async (req:Request, res:Response)=>{
        const {id} = req.params;
        const {title, status} = req.body;
    
        await TaskModels.updateTask(id,title,status);
        return res.status(204).json()
    };

};

export default new taskController();