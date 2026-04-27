// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// // Step 1: Select the form
// const form = document.getElementById("create-task-form");

// // Step 2: Add event listener
// form.addEventListener("submit", (event) => {
//     // Prevent page refresh
//     event.preventDefault();

//     // Step 3: Get form data
//     const taskInput = event.target["new-task-description"].value;

//     // Call function to build task
//     buildToDo(taskInput);

//     // Optional: clear input after submit
//     form.reset();
// });

// // Step 4: Function to add task to list
// function buildToDo(task) {
//     // Create new list item
//     const li = document.createElement("li");

//     // Add text
//     li.textContent = task;

//     // Select the task list
//     const taskList = document.getElementById("tasks");

//     // Append to list
//     taskList.appendChild(li);
// }



document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Select form
  const form = document.getElementById("create-task-form");

  // Step 2: Add submit listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Step 3: Safely get input value (works in jsdom tests)
    const taskInput = event.target.querySelector(
      '[name="new-task-description"]'
    ).value;

    // Step 4: Add task to list
    buildToDo(taskInput);

    // Optional: clear input
    form.reset();
  });

  // Step 5: Function to create <li>
  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(li);
  }
});