import cnx from './connection'


interface task{
    title:string
    id:number
};

class TaskModels   { 


    getAll = async()=>{
        const  [tks] = await cnx.execute('SELECT * FROM tasks');
        return tks;

    };

    creationTask = async(task:task)=>{
    const { title } = task;
    const dateUTC:string = new Date(Date.now()).toUTCString();
    const status:string = "Pendente";

    const query:string = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ? ,?)'

    const [resultado]:any = await cnx.execute(query,[title,status,dateUTC]);
    
    return {'Message': `Task: ${title} adicionada, ID: ${resultado.insertId}`};
        

    };

    deleteTask = async (id:string) =>{
    
        const query = 'DELETE FROM tasks WHERE id= ?';
    
        const [resultado] = await cnx.execute(query,[id]);
    
        return resultado;
    
    };
    updateTask = async (id:string, title:string, status:string) =>{
        
        
        const query = 'UPDATE tasks SET title= ?, status= ? WHERE id= ?';
    
        const [resultado] = await cnx.execute(query,[title, status ,id]);
    
        return resultado;
    
    };


};

export default new TaskModels();