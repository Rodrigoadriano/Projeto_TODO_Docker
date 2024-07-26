const TaskURL = "http://192.168.0.100:3333/tasks"

const fetchTask = async ()=> {
    const res = await fetch(TaskURL);
    const tks = await res.json();
    return tks;
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

   const  btn = NovoElemento("Button" ,'', "<span class='material-symbols-outlined'>edit_note</span>")
   const  btn2 = NovoElemento("Button" ,'', "<span class='material-symbols-outlined'>delete_forever</span>")
   btn.classList.add('btn_action')
   btn2.classList.add('btn_action')
   btn2.addEventListener('click', ()=> DeleteTask(id));
   tdActions.appendChild(btn) 
   tdActions.appendChild(btn2) 



   tr.append(tdTitle,tdCreate, tdStatus, tdActions);
   //tr.appendChild(tdTitle);
   //tr.appendChild(tdCreate);
   //tr.appendChild(tdStatus);
   //tr.appendChild(tdActions);
   return tr;   
};

const Loadtasks =async ()=>{
    console.log("task Load")
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    const tasks = await fetchTask();
    tasks.forEach(element => {
        const row = createRow(element);
        tbody.appendChild(row)
    });
};

form.addEventListener('submit' , AddTask)

Loadtasks();
