document.addEventListener("DOMContentLoaded", () => {
  const addTodo = () => {
    if (input.value !== "") {
      const div = document.createElement("div");
      document.body.appendChild(div);
      document.body.appendChild(div);

      const checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          div.style.textDecoration = "line-through";
        } else {
          div.style.textDecoration = "";
        }
      });

      div.appendChild(checkbox);

      const span = document.createElement("span");
      span.textContent = input.value;
      input.value = "";
      div.appendChild(span);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "삭제";

      deleteButton.addEventListener("click", () => {
        div.parentNode.removeChild(div);
      });
      div.appendChild(deleteButton);
    }
    today = new Date();
    document.getElementById("va2").innerHTML =
      today.getHours() +
      "시 " +
      today.getMinutes() +
      "분 " +
      today.getSeconds() +
      "초 ";
  };

  const h1 = document.createElement("h1");
  h1.textContent = "할 일 목록";
  document.body.appendChild(h1);

  const input = document.createElement("input");
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      addTodo();
    }
  });

  document.body.appendChild(input);

  const addButton = document.createElement("button");
  addButton.textContent = "추가하기";

  document.body.appendChild(addButton);
  addButton.addEventListener("click", () => {
    if (input.value !== "") {
      addTodo();
    }
  });

  document.getElementById("va2").innerHTML =
    today.getHours() +
    "시 " +
    today.getMinutes() +
    "분 " +
    today.getSeconds() +
    "초 ";
});
