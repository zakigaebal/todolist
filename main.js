const inputVal = document.getElementsByClassName("inputVal")[0];

const addTaskBtn = document.getElementsByClassName("btn")[0];

const today = new Date();

function add() {
  if (inputVal.value.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
    input.value = "";
  }

  showItem();
}

addTaskBtn.addEventListener("click", function () {
  if (inputVal.value.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
  }

  showItem();
});

function showItem() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = "";
  let itemShow = document.querySelector(".todoLists");

  taskList.forEach((data, index) => {
    html += `
    <div id="line" class="todoList">
    <input type="checkbox" id="checkbox">
    <h6 class="date">${today.getHours() + ":" + today.getMinutes()}</h6>
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">제거하기</button>
    </div>
    `;
  });
  itemShow.innerHTML = html;
}
showItem();

function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showItem();
}

function clearTask() {
  localStorage.clear();
  showItem();
}

const input = document.getElementsByClassName("inputVal")[0];
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    add();
  }
});
