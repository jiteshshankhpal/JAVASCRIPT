const todoList = [{ 
   name: 'make dinner',
   dueDate: '10-03-2025' 
},
 { 
    name:'wash dishes',
    dueDate: '10-04-2025' 
}];

renderTodoList();

function renderTodoList () {
    let todoListHTML = '';

    todoList.forEach((taskObject, index) => {
        const { name, dueDate } = taskObject;
        let html =
            `<div>${name}</div>
             <div>${dueDate}</div> 
            <button class="del-btn">Delete</button>
            `
        todoListHTML += html;
    })

    document.querySelector('.todo-list').innerHTML = `${todoListHTML}`;

    document.querySelectorAll('.del-btn')
        .forEach((delBtn, index) => {
            delBtn.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })
        });
}

document.querySelector('.add-btn')
    .addEventListener('click', () => {
        addTask();
    });


function addTask() {
    const inputELement = document.querySelector('.task-input');
    const dateInput = document.querySelector('.date-input');

    const name = inputELement.value;
    const dueDate = dateInput.value;

    todoList.push({ name, dueDate });
    
    inputELement.value = '';
    dateInput.value = ''

    renderTodoList();  
}