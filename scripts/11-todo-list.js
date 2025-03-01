const todoList = JSON.parse(localStorage.getItem('todos')) || [{
  name: '',
  date: ''
}];

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todoList)); // Save actual array
}

function displayTodo() {
    let outputDisplay = '';

    for (let i = 0; i < todoList.length; i++) {
        const task = todoList[i];
        const taskName = task.name;
        let taskDate = task.date;
        let timeOfDay = document.querySelector('.time-select').value
        if (!taskDate) {
          taskDate = '';
          timeOfDay = '';
        }
        const html = `<div  class="todo-text"><p class="task-name">${taskName}</p> <p class="date">${taskDate} ${timeOfDay}</p> <button class="finish-btn" onclick="finishTodo(${i})">done</button></div>`;
        outputDisplay += html;
    }
    
    document.querySelector('.output').innerHTML = outputDisplay;
}

function addTodo() {
    const toDo = document.querySelector('.input-box').value.trim();
    const toDoDate = document.querySelector('.task-date').value;
    const errorHold = document.querySelector('.js-error');
    if (toDo && toDoDate) {
        todoList.push({name: toDo, date: toDoDate});
        saveTodo(); // Save to localStorage
        displayTodo();
        document.querySelector('.input-box').value = '';
        errorHold.innerText = '';
    }/*If only the task is written*/ else if (toDo) {
      todoList.push({name: toDo});
        saveTodo(); // Save to localStorage
        displayTodo();
        errorHold.innerText = '';
        document.querySelector('.input-box').value = '';
    }/*If nothing/only the time is stated*/ else {
      errorHold.innerText = 'Please type a task.';
    } 
}

// Display stored todos on page load
displayTodo();

//Remove button function
function finishTodo(index) {
	todoList.splice(index, 1);
	saveTodo();
	displayTodo();
}

// adds enter key as an executor
document.querySelector('.input-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo(); // Call addTodo() when Enter is pressed
    }
});

//automatically adds minutes 
  document.querySelector(".task-date").addEventListener("blur", function() {

        if (timeParts.length === 1 || (timeParts.length === 2 && timeParts[1] === "")) {
            // If the user only types hours or clears minutes, set minutes to 00
            this.value = `${timeParts[0].padStart(2, '0')}:00`;
        }
    });
