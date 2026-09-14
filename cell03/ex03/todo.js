function addTodo() {
    let text = prompt("Enter a new TO DO");

    if (text != null && text.trim() != "") {
        createTodo(text);
        saveTodos();
    }
}

function createTodo(text) {
    let todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.onclick = function () {
        if (confirm("Do you want to delete this TO DO?")) {
            todo.remove();
            saveTodos();
        }
    };

    let list = document.getElementById("ft_list");
    list.prepend(todo);
}

function saveTodos() {
    let list = document.getElementById("ft_list");
    let items = list.children;
    let todos = [];

    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=31536000; path=/";
}

function loadTodos() {
    let cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith("todos=")) {
            let data = cookie.substring(6);
            let todos = JSON.parse(decodeURIComponent(data));

            for (let i = todos.length - 1; i >= 0; i--) {
                createTodo(todos[i]);
            }
        }
    }
}

loadTodos();