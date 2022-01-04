document.addEventListener("DOMContentLoaded", () => {
  const addTodo = () => {
    if (input.value !== "") {
      const div = document.createElement("div");
      document.body.appendChild(div);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "checkbox";
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

      const today = new Date();

      const p = document.createElement("h6");
      p.textContent = today.getHours() + ":" + today.getMinutes();
      input.value = "";
      div.appendChild(p);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "제거하기";
      deleteButton.addEventListener("click", () => {
        div.parentNode.removeChild(div);
        localStorage.clear();
        // 저장된 녀석을 모두 제거
      });
      div.appendChild(deleteButton);
    }
  };

  const title = document.createElement("div");
  document.body.appendChild(title);
  title.id = "testID";

  const h1 = document.createElement("h1");
  h1.textContent = "할 일 목록";

  title.appendChild(h1);

  const form = document.createElement("div");
  document.body.appendChild(form);

  const input = document.createElement("input");
  if (event.keyCode === 13) {
    addTodo();
  }

  form.appendChild(input);

  const addButton = document.createElement("button");
  addButton.textContent = "추가하기";
  form.appendChild(addButton);

  addButton.addEventListener("click", () => {
    if (input.value !== "") {
      addTodo();
    }
  });
});
