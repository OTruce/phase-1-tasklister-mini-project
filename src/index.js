document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// Step 1: Select the form
const form = document.getElementById("create-task-form");

// Step 2: Add event listener
form.addEventListener("submit", (event) => {
    // Prevent page refresh
    event.preventDefault();

    // Step 3: Get form data
    const taskInput = event.target["new-task-description"].value;

    // Call function to build task
    buildToDo(taskInput);

    // Optional: clear input after submit
    form.reset();
});

// Step 4: Function to add task to list
function buildToDo(task) {
    // Create new list item
    const li = document.createElement("li");

    // Add text
    li.textContent = task;

    // Select the task list
    const taskList = document.getElementById("tasks");

    // Append to list
    taskList.appendChild(li);
}