document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="priority"></span>
            <span class="task-text">${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        
        taskItem.onclick = function() {
            taskItem.classList.toggle("completed");
            saveTasks();
        };
        
        taskList.appendChild(taskItem);
        taskInput.value = "";
        saveTasks();
    } else {
        alert("Please enter a task!");
    }
}

function editTask(button) {
    var taskItem = button.parentNode;
    var taskTextSpan = taskItem.querySelector(".task-text");
    var newText = prompt("Edit task:", taskTextSpan.textContent);
    
    if (newText !== null) {
        taskTextSpan.textContent = newText;
        saveTasks();
    }
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.remove();
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
}
