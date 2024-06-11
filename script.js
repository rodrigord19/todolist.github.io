document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const timeText = taskTime.value;
        if (taskText) {
            const li = document.createElement('li');
            const input = document.createElement('input');
            input.type = 'text';
            input.value = taskText;
            input.setAttribute('readonly', 'readonly');

            const timeSpan = document.createElement('span');
            timeSpan.classList.add('time-display');
            timeSpan.innerText = timeText;

            const editBtn = document.createElement('button');
            editBtn.classList.add('editBtn');
            editBtn.addEventListener('click', () => editTask(input, editBtn));

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.addEventListener('click', () => deleteTask(li));

            li.appendChild(input);
            li.appendChild(timeSpan);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = '';
            taskTime.value = '';
        }
    }

    function editTask(input, editBtn) {
        if (editBtn.innerText.toLowerCase() === 'edit') {
            input.removeAttribute('readonly');
            input.focus();
            editBtn.innerText = 'Save';
        } else {
            input.setAttribute('readonly', 'readonly');
            editBtn.innerText = 'Edit';
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});