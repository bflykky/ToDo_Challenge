const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOARR_KEY = "toDoArr";

const savedToDoArr = localStorage.getItem(TODOARR_KEY);
let toDoArr = [];

function saveToDoArr() {
    localStorage.setItem(TODOARR_KEY, JSON.stringify(toDoArr)); 
}

function deleteToDo(event) {
    const itemToRemove = event.target.parentElement;
    itemToRemove.remove();
    toDoArr = toDoArr.filter((item) => item.id !== parseInt(itemToRemove.id));
    saveToDoArr();
}

function paintToDo(newToDoObj) {
    const newToDoItem = document.createElement("li");
    newToDoItem.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newToDoObj.text;
    button.innerText = "❌";

    newToDoItem.appendChild(span);
    newToDoItem.appendChild(button);
    toDoList.appendChild(newToDoItem);

    button.addEventListener("click", deleteToDo);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDoArr.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDoArr();
}

if (savedToDoArr !== null) {
    const parsedToDoArr = JSON.parse(savedToDoArr);
    toDoArr = parsedToDoArr;
    parsedToDoArr.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
