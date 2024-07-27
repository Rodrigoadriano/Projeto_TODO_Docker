const taskModel = require('../models/tskModels')


const getAll = async (_req, res)=> {
    try {

        const tks = await taskModel.getAll()
        return res.status(200).json(tks);
    } catch (err){
        console.log('Meu Erro' , err.code)
        return res.status(500).json({error: err.code});

    };
        

};

const createTask = async (req,res)=>{
    const tks = await taskModel.createTask(req.body);

    return  res.status(201).json(tks);
};

const deleteTask = async (req, res)=>{
    const {id} = req.params;

    await taskModel.deleteTask(id);
    return res.status(200).json(`ID ${id} deleted!`)
};
const updateTask = async (req, res)=>{
    const {id} = req.params;
    const {title, status} = req.body;

    await taskModel.updateTask(id,title,status);
    return res.status(204).json()
};

module.exports= {
    getAll,
    createTask,
    deleteTask,
    updateTask
};