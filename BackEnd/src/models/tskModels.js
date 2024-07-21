const connection = require("./connection")

const getAll = async()=> {
    const  [tks] = await connection.execute('SELECT * FROM tasks');
    return tks;

};

const createTask = async (task)=> {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const status = "Pendente";

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ? ,?)'

    const [resultado] = await connection.execute(query,[title,status,dateUTC]);
    
    return {'Message': `Task: ${title} adicionada, ID: ${resultado.insertId}`};
    

};

const deleteTask = async (id) =>{
    
    const query = 'DELETE FROM tasks WHERE id= ?';

    const [resultado] = await connection.execute(query,[id]);

    return resultado;

};
const updateTask = async (id, title, status) =>{
    
    
    const query = 'UPDATE tasks SET title= ?, status= ? WHERE id= ?';

    const [resultado] = await connection.execute(query,[title, status ,id]);

    return resultado;

};


module.exports  = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};