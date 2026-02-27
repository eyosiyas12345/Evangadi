// variables
let html = $("html");
let body = $("body");
let header = $("h1");
let inputs = $("input");
let listSec = $(".todo-list");
let listContainer = $(".lists-container");
let listTemplate = $(".template-list");
let addSec = $(".todo-add")
let description = $(".description");
let addBtn = $(".add-btn");
let inputAddBtn = $(".input-add-btn");
let deleteBtn = $(".delete-btn");
let todoForm = $("form");
let taskInput = $("#task-input");
// state
html.css({
  "font-size": "1.2rem",
});
description.css({
  "font-weight": "bold",
})
addBtn.css({
  display: "block",
  margin: "auto"
})
inputs.css({
  margin: "1rem",
  padding: "1rem",
  border: "1px solid grey"
})
addSec.hide();

// Events
addBtn.click(addTask);
inputAddBtn.click(original)
todoForm.submit(submitTask);
deleteBtn.click(deleteTask);

//functions
function addTask(){
  addSec.show();
  addBtn.hide();
}
function original(){
  addSec.hide();
  addBtn.show();
}
function submitTask(event){
  if(taskInput.val() === ""){
    console.log("Input is empty. Please enter a task.");
    return;
  }
  event.preventDefault();
  let newTodo = document.createElement("li");
  newTodo.className = "list";
  let inputedTask = taskInput.val();
  newTodo.innerHTML= 
  `<div class="row">
        <div class="description col-8 fw-bold">${inputedTask}
        </div>
        <button class="delete-btn btn col-3 p-2 bg-danger text-white fw-bold">
          Delete
        </button>
      </div>`;
  listContainer.append(newTodo);
}

function deleteTask(){
   listContainer.on("click",".delete-btn", function (){
    $(this).closest('.list').remove();
   });//$(ul).on('click','.delete-btn-class', function(){--action when btn})
}
// problem : how can I hide/remove manually coded <li> section. 