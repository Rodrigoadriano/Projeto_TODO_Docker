const taskModel = require('../models/tskModels')


const getAll = async (_req, res)=> {
    const tks = await taskModel.getAll()
    return res.status(200).json(tks);


};

const createTask = async (req,res)=>{
    const tks = await taskModel.createTask(req.body);
    return  res.status(201).json(tks);
};

module.exports= {
    getAll,
    createTask
};