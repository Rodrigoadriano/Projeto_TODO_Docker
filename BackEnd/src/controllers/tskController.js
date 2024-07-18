const taskModel = require('../models/tskModels')


const getAll = async (_req, res)=> {
    const tks = await taskModel.getAll()
    return res.status(200).json(tks);


};

const createTask = async (req,res)=>{
    const tks = await taskModel.createTask(req.body);

    return  res.status(201).json(tks);
};

const deleteTask = async (req, res)=>{
    const {id} = req.params;

    const tks = await taskModel.deleteTask(id);
    return res.status(200).json(`ID ${id} deleted!`)
};
const updateTask = async (req, res)=>{
    const {id} = req.params;

    const tks = await taskModel.updateTask(id, req.body);
    return res.status(200).json(`ID ${id} Update!`)
};

module.exports= {
    getAll,
    createTask,
    deleteTask,
    updateTask
};