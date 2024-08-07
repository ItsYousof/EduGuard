// Check if the 'list' exists in localStorage; if not, initialize it as an empty array
if (!localStorage.getItem('list')) {
    localStorage.setItem('list', '[]');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('todo-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTodo(event.target.value);
            event.target.value = '';
        }
    });

    const todos = JSON.parse(localStorage.getItem('list'));
    todos.forEach(function(todo) {
        planAdding(todo);
    });
});

function planAdding(text) {
    const list = document.getElementById('list');
    const todo = document.createElement('li');
    todo.innerHTML = `
        <span>${text}</span>
        <i class='bx bx-trash'></i>
    `;
    list.appendChild(todo);

    const trash = todo.querySelector('i.bx-trash');
    trash.addEventListener('click', function() {
        todo.remove();

        const todos = JSON.parse(localStorage.getItem('list'));
        const index = todos.indexOf(text);
        if (index > -1) {
            todos.splice(index, 1);
            localStorage.setItem('list', JSON.stringify(todos));
        }
    });
}

function addTodo(text) {
    const list = document.getElementById('list');
    const todo = document.createElement('li');
    todo.innerHTML = `
        <span>${text}</span>
        <i class='bx bx-trash'></i>
    `;
    list.appendChild(todo);

    const todos = JSON.parse(localStorage.getItem('list'));
    todos.push(text);
    localStorage.setItem('list', JSON.stringify(todos));

    const trash = todo.querySelector('i.bx-trash');
    trash.addEventListener('click', function() {
        todo.remove();

        const todos = JSON.parse(localStorage.getItem('list'));
        const index = todos.indexOf(text);
        if (index > -1) {
            todos.splice(index, 1);
            localStorage.setItem('list', JSON.stringify(todos));
        }
    });
}
