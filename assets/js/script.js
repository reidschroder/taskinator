var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//replaced console.log for expressions tha create a new task item, style the new task item, add text, and append the element to the task list. This is KEY to dynamically creating elements with the DOM
var createTaskHandler = function(event) { 

    event.preventDefault();
    
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl); 

    //add entire lsit item to list
    tasksToDoEl.appendChild(listItemEl); 
    }; 
  
  formEl.addEventListener("submit", createTaskHandler);