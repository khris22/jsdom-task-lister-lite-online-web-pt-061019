document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  const inputField = document.getElementById("new-task-description");
  // const submitButton = document.getElementById("submit");
  const listTasks = document.getElementById("tasks");


  taskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const newTask = document.createElement("li");
      newTask.innerHTML = document.getElementById("new-task-description").value;
      listTasks.appendChild(newTask);
      event.target.reset();
    }, false);

});
