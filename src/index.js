document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function onSubmit(event) {

    // Prevent default:
    event.preventDefault();

    // Get the inputted value description:
    const taskInput = document.querySelector("#new-task-description");
    const taskDescription = taskInput.value;

    const dropdownValue = document.querySelector("#dropdown").value;

    // Get the taskList UL
    const taskList = document.querySelector("#tasks");

    // Create new list item element:
    const newTask = document.createElement("li");

    //declare due date and priority values
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector("#dropdown").value;

    //sets new output text with all variables
    newTask.innerText = `Task- ${taskDescription} - Due Date: ${dueDate} - Priority: ${priority}`;
    newTask.setAttribute("data-priority", dropdownValue);

    //adds delete button and listener
    const deleteButton=document.createElement("button");
    deleteButton.innerText = "Done, bitch!"; 
    deleteButton.addEventListener("click", function(deleteTask){
      taskList.removeChild(newTask);
    })

    //appends
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    //resets input back to blank after submission
    taskInput.value = '';

    console.log(dueDate);
    console.log(priority);

  })

});
