const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make dinner',
    dueDate: '10-03-2025'
},
{
    name: 'wash dishes',
    dueDate: '10-04-2025'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const taskObject = todoList[i];
        const { name, dueDate } = taskObject;
        let html =
            `<div>${name}</div>
             <div>${dueDate}</div> 
            <button class="del-btn" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
            `
        todoListHTML += html;

    }

    document.querySelector('.todo-list').innerHTML = `${todoListHTML}`;
    
    localStorage.setItem('todoList', JSON.stringify(todoList));
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