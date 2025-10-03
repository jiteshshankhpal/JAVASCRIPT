const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList () {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const task = todoList[i];
        let html = `<p>${task}</p>`
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.todo-list').innerHTML = `${todoListHTML}`;
}

function addTask() {
    const inputElement = document.querySelector('.task-input');

    todoList.push(inputElement.value);

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}