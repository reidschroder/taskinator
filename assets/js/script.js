var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//replaced console.log for expressions tha create a new task item, style the new task item, add text, and append the element to the task list. This is KEY to dynamically creating elements with the DOM
var createTaskHandler = function(event) { 

    event.preventDefault();

    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 
    listItemEl.textContent = "This is a new task."; 
    tasksToDoEl.appendChild(listItemEl); 
    }; 
  
  formEl.addEventListener("submit", createTaskHandler);