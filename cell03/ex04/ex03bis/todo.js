$("#new").click(function () {
    let text = prompt("Enter a new TO DO");

    if (text != null && text.trim() != "") {
        createTodo(text);
        saveTodos();
    }
});

function createTodo(text) {
    let todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);

    todo.click(function () {
        if (confirm("Do you want to delete this TO DO?")) {
            todo.remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function saveTodos() {
    let todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
    });

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