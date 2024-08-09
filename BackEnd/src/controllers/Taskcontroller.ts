import TaskModels from '../models/taskModels';
import { Request, Response } from 'express';

export interface ITaskController {
    getAll(req: Request, res: Response): Promise<Response>;
    createTask(req: Request, res: Response): Promise<Response>;
    deleteTask(req: Request, res: Response): Promise<Response>;
    updateTask(req: Request, res: Response): Promise<Response>;
}

class taskController extends ITaskController  {

    getAll = async (_req:Request, res:Response)=> {
        try {
            const tks = await  TaskModels.getAll();
            console.log('Conexão DB: Ok!')
            return res.status(200).json(tks);
        } catch (err:Error){
            console.log('Conexão DB: Falhou,:' , err.code)
            return res.status(500).json({error: err.code}).send();
    
        };
        };
    createTask = async(req:Request, res:Response)=>{
        try {
            const tks = await TaskModels.creationTask(req.body);
            return  res.status(201).json(tks);
            } catch (err:Error){
            console.log('Meu Erro' , err.code)
            return res.status(500).json({error: err.code});
            };
    };    

     deleteTask = async (req:Request, res:Response)=>{
        try{

            const {id} = req.params;
            
            await TaskModels.deleteTask(id);
            return res.status(200).json(`ID ${id} deleted!`)
        }catch(err:Error){
            return res.status(500).json({error: err.code});
        };
    };
     updateTask = async (req:Request, res:Response)=>{

        try{

            const {id} = req.params;
            const {title, status} = req.body;
            
            await TaskModels.updateTask(id,title,status);
            return res.status(204).json()
        }catch(err:Error){
            return res.status(500).json({error: err.code});
        };
    };

};

export default new taskController();