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

    todoList.forEach(function(taskObject, index) {
        const { name, dueDate } = taskObject;
        let html =
            `<div>${name}</div>
             <div>${dueDate}</div> 
            <button class="del-btn" onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            ">Delete</button>
            `
        todoListHTML += html;
    })

    for (let i = 0; i < todoList.length; i++) {
        
    }

    console.log(todoListHTML);

    document.querySelector('.todo-list').innerHTML = `${todoListHTML}`;
}

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