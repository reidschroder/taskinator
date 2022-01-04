var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//replaced console.log for expressions tha create a new task item, style the new task item, add text, and append the element to the task list. This is KEY to dynamically creating elements with the DOM
var createTaskHandler = function() { 
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 
    listItemEl.textContent = "This is a new task."; 
    tasksToDoEl.appendChild(listItemEl); 
    }; 
  
  buttonEl.addEventListener("click", createTaskHandler);