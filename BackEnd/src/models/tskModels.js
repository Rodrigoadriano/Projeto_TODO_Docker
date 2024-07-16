const connection = require("./connection")

const getAll = async()=> {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;

};

const createTask = async (task)=> {
    const { title } = task;
    const dateUTC = new Date(Date.now).toUTCString();
    const status = "Pendente";

    const query = 'INSERT INTO tasks(title, status, create_at) VALUES (?, ? ,?)'

    const [resultado] = await connection.execute(query,title,status,dateUTC);
    return resultado;
    

};


module.exports  = {
    getAll,
    createTask
};