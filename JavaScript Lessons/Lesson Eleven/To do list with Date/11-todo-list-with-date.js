const todoList = [{
    name: 'make dinner',
    dueDate: '2025-12-22'
}, {
    name:'wash dishes',
    dueDate: '2025-12-22'
}];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;    // shortcut for this line is const { name } = todoObject;
        const dueDate = todoObject.dueDate;   // shortcut for this line is const { dueDate } = todoObject;
        const html = `
        <div>${name} </div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }
 
    
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
       // name: name,
       // dueDate: dueDate
        name,
        dueDate
}); 
   


//if we add something to our todo list and click add it will reset the text box. To achieve this input the below code.

    inputElement.value = '';

    renderTodoList();
}