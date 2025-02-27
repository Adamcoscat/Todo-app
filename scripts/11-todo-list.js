const todoList = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todoList)); // Save actual array
}

function displayTodo() {
    let outputDisplay = '';

    for (let i = 0; i < todoList.length; i++) {
        const task = todoList[i];
        const html = `<div  class="todo-text"><p>${task}</p> <button class="finish-btn" onclick="finishTodo(${i})">done</button></div>`;
        outputDisplay += html;
    }
    
    document.querySelector('.output').innerHTML = outputDisplay;
}

function addTodo() {
    const toDo = document.querySelector('.input-box').value.trim();
    if (toDo) {
        todoList.push(toDo);
        saveTodo(); // Save to localStorage
        displayTodo();
        document.querySelector('.input-box').value = '';
    }
}

// Display stored todos on page load
displayTodo();

function finishTodo(index) {
	todoList.splice(index, 1);
	saveTodo();
	displayTodo();
}

document.querySelector('.input-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo(); // Call addTodo() when Enter is pressed
    }
});
