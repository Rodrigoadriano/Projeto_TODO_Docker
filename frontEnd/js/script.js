const TaskURL = "http://192.168.0.100:3333/tasks"

const fetchTask = async ()=> {
   
        const res = await fetch(TaskURL);

        if (res.status == 200){
            const tks = await res.json();
            return tks;
        };

        return {
            error: res.status
        }
    };
    

    
    




const form = document.querySelector(".add-form")

const AddTask = async (event)=>{
    event.preventDefault();
    const tks = document.querySelector('.place').value
    
    const bodytask = {title: tks};

    await fetch(TaskURL, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodytask)
      
    })
    document.querySelector('.place').value = ''

    Loadtasks();
};

const DeleteTask = async  (id)=> {
    const URLdelete =  TaskURL +'/'+ id;
    await fetch(URLdelete, {
        method: 'delete'
    })
    Loadtasks();

};

const UpdateTask = async ( {id , title , status})=>{
    const URLUpdate =  TaskURL +'/'+ id;
    await fetch(URLUpdate, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title,status})
    })
    Loadtasks();
};

const createRow = (task) =>{
    

    const NovoElemento = (tag, innerText = '' , innerHTML = '')=>{
        const element = document.createElement(tag);

        if(innerText){  
            element.innerText = innerText 
    
        }
        if (innerHTML){
            element.innerHTML = innerHTML
        };

        return element;
    };
    const CreateSelect = (valor)=>{
        const options = `
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Finalizado">Concluída</option>
        `;
        
        const select = NovoElemento('select','',options);
        select.value = valor;
        return select;
        
    };
    const FormatDate = (UTC)=>{
        const options = {dateStyle: 'long', timeStyle: 'short'};
        const date = new Date(UTC).toLocaleString('pt-br',options);
        return date;
    };
   const  {id , title, created_at , status} = task;
   const tr = NovoElemento('tr');

   const tdTitle = NovoElemento('td',title);
   const tdCreate = NovoElemento('td' , FormatDate(created_at));
   const tdStatus = NovoElemento('td');
   const tdActions = NovoElemento('td');

   const valores = CreateSelect(status);
   tdStatus.appendChild(valores);
   tdStatus.addEventListener('change',({target})=>{UpdateTask({...task, status: target.value })}) 

   const  btn_edit = NovoElemento("Button" ,'', "<span class='material-symbols-outlined'>edit_note</span>")
   const  btn_delete = NovoElemento("Button" ,'', "<span class='material-symbols-outlined'>delete_forever</span>")
   btn_delete.classList.add('btn_action')
   btn_edit.classList.add('btn_action')
   btn_delete.addEventListener('click', ()=> DeleteTask(id));
   btn_edit.addEventListener('click', ()=>{
    tdTitle.innerText = "";
    tdTitle.appendChild(editForm);
   })
   

   const editForm = NovoElemento('form');
   const editImput = NovoElemento('input');
   editImput.value = title;
   editForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    UpdateTask({...task, title : editImput.value});
    
})
   editForm.appendChild(editImput);
   
   
   
   tdActions.appendChild(btn_edit) 
   tdActions.appendChild(btn_delete) 


 
   tr.append(tdTitle,tdCreate, tdStatus, tdActions);
   return tr;   
};

const Loadtasks =async ()=>{
    const tbody = document.querySelector('tbody');
    const ttable = document.querySelector('main');
    tbody.innerHTML = '';
    const tasks = await fetchTask();
    if ('error' in tasks){
        console.log('falha!')
        const tr = document.createElement('div');
        tr.innerText = "Ops, ocorreu um problema: Servidor Offline ou sem conexão!"
        ttable.appendChild(tr);

        
    }else{
        tasks.forEach(element => {
        const row = createRow(element);
        tbody.appendChild(row)


    });

    };
};

form.addEventListener('submit' , AddTask)

Loadtasks();
