const fetchTask = async ()=> {
    const res = await fetch('http://localhost:3333/tasks')
    const tks = await res.json();
    return tks;
};
const form = document.querySelector(".add-form")
const AddTask = async (event)=>{
    event.preventDefault();
    const tks = document.querySelector('.place').value
    
    const bodytask = {title: tks};
    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodytask)
    })

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

   const  {id , title, created_at , status} = task;
   const tr = NovoElemento('tr');

   const tdTitle = NovoElemento('td',title);
   const tdCreate = NovoElemento('td' , created_at)
   const tdStatus = NovoElemento('td');
   const tdActions = NovoElemento('td');

   const valores = CreateSelect(status);
   tdStatus.appendChild(valores);


   const  btn = NovoElemento("Button" ,'', "<span class='material-symbols-outlined'>edit_note</span>")
   const  btn2 = NovoElemento("Button" ,'', "<span class='material-symbols-outlined'>delete_forever</span>")
   btn.classList.add('btn_action')
   btn2.classList.add('btn_action')
   
   tdActions.appendChild(btn) 
   tdActions.appendChild(btn2) 


   tr.appendChild(tdTitle);
   tr.appendChild(tdCreate);
   tr.appendChild(tdStatus);
   tr.appendChild(tdActions);
   return tr;   
};

const Loadtasks =async ()=>{
    const tbody = document.querySelector('tbody');
    const tasks = await fetchTask();
    tasks.forEach(element => {
        const row = createRow(element);
        tbody.appendChild(row)
    });
};

form.addEventListener('submit' , AddTask)
 
Loadtasks();