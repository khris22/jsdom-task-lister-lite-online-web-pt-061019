document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // set variable for selected HTML elements from the DOM
  const taskForm = document.getElementById("create-task-form")
  const inputField = document.getElementById("new-task-description");
  // const submitButton = document.getElementById("submit");
  const listTasks = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const newTask = document.createElement("li");
      newTask.innerHTML = inputField.value;
      listTasks.appendChild(newTask);
      event.target.reset();
    }, false);
});


// event.target.reset();
// target event property returns the element that triggered the event.
// reset() method resets the values of all elements in a form

// Creating an element in JavaScript is an easy process. Simply call document.createElement('tagName'), where tagName is the name of any valid HTML tag (e.g., 'p', 'div', 'span', etc.).
// You can update that node's innerHTML property with a string of HTML and it will be just as if you changed the HTML source for that node.
// appendChild() ; to get an element to appear in the DOM, we have to append it to an existing DOM node.