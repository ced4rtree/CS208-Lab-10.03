const TASK_INPUT_ID = "task-input";

function domLoaded() {
    let addButton = document.getElementById("add-btn");
    let inputElement = document.getElementById(TASK_INPUT_ID);
    addButton.addEventListener("click", addBtnClick);
    inputElement.addEventListener("keyup", event => {
        if (event.code === "Enter") {
            addBtnClick();
        }
    })
}

function addBtnClick() {
    let inputElement = document.getElementById(TASK_INPUT_ID);
    if (inputElement.value !== "") {
        addTask(inputElement.value);
    }
    inputElement.value = "";
    inputElement.focus();
}

function addTask(taskName) {
    let taskList = document.getElementById("task-list");
    let newTask = document.createElement("li");
    newTask.innerHTML = `<div class="task"><span class="task-text">${taskName}</span><button class="done-btn">&#10006;</button></div>`;
    taskList.appendChild(newTask);

    let doneButtons = document.getElementsByClassName("done-btn");
    doneButtons[doneButtons.length-1].addEventListener("click", removeTask);
}

function removeTask(event) {
    // button -> div container -> li element
    // target -> parentNode    -> parentNode
    let taskElement = event.target.parentNode.parentNode;
    taskElement.parentNode.removeChild(taskElement);
}

addEventListener("DOMContentLoaded", domLoaded);
