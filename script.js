document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  addTask();
});

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var deadlineInput = document.getElementById("deadlineInput");
  var priorityInput = document.getElementById("priorityInput");
  var labelInput = document.getElementById("labelInput");
  var taskList = document.getElementById("taskList");
  
  if (taskInput.value !== "") {
    var task = document.createElement("li");
    task.innerHTML = `
      <span onclick="toggleTaskStatus(this)" class="checkbox">☐</span>
      <span>${taskInput.value}</span>
      <span>${deadlineInput.value}</span>
      <span>Priority - ${priorityInput.value}</span>
      <span>${labelInput.value}</span>
    `;
    taskList.appendChild(task);
    taskInput.value = "";
    deadlineInput.value = "";
    priorityInput.value = "low";
    labelInput.value = "";
  }
}

function toggleTaskStatus(element) {
  if (element.textContent === "☐") {
    element.textContent = "☑";
    element.parentNode.classList.add("completed");
  } else {
    element.textContent = "☐";
    element.parentNode.classList.remove("completed");
  }
}
