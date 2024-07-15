const taskModel = require('../models/tskModels')


const getAll = async (req, res)=> {
    const tks = await taskModel.getAll()
    return res.status(200).json(tks);


};

module.exports= {
    getAll
};