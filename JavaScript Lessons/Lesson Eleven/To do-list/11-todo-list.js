const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);


//if we add something to our todo list and click add it will reset the text box. To achieve this input the below code.

    inputElement.value = '';
}