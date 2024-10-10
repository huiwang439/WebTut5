document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // 加载本地存储中的任务
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToDOM(task));

    // 添加任务按钮点击事件
    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTaskToDOM(task);
            saveTaskToLocalStorage(task);
            taskInput.value = ''; // 清空输入框
        }
    });

    // 动态添加到页面上
    function addTaskToDOM(task) {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        // 为删除按钮添加点击事件
        deleteBtn.addEventListener('click', () => {
            removeTaskFromLocalStorage(task);
            li.remove();
        });
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    // 保存任务到本地存储
    function saveTaskToLocalStorage(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // 从本地存储中删除任务
    function removeTaskFromLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => t!== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
