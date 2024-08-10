/*
Написать объект ToDoList, который хранит в себе задачи 
{'title': 'Помыть посуду', id: 1, priority: 1} 
и имеет методы: 
    - Добавить задачу 
    - Удалить задачу по id 
    - Обновить имя или приоритет по id 
    - Отсортировать задачи по приоритету
*/

'use strict'

const ToDoList = {
    tasks: [],
    nextIdTask: 0,
    getIdTask: function (id) {
        const taskIndex = this.tasks.findIndex(task => task.id == id)
        if (taskIndex === -1) {
            return false
        }
        return taskIndex
    },
    addTask: function (title = 'Без названия', priority = 3) { // приоритеты: 3 - обычная задача, 2 - средняя важность, 1 - очень важно
        const task = {
            id: ++this.nextIdTask,
            title,
            priority
        }
        console.log(`Новая задача "${task.title}" создана!`)
        return this.tasks.push(task)
    },
    deleteTask: function (id) {
        const taskIndex = this.getIdTask(id);
        if (!this.tasks[taskIndex]) {
            return console.log('Ошибка. Такой задачи не существует')
        }
        console.log(`Задача "${this.tasks[taskIndex].title}" удалена.`)
        return this.tasks.splice(taskIndex, 1)
    },
    updateTask: function (id, title = '', priority = '') {
        const taskIndex = this.getIdTask(id); 
        if (!this.tasks[taskIndex]) {
            return console.log('Ошибка. Такой задачи не существует')
        }
        const task = this.tasks[taskIndex];
        console.log(`Задача "${task.title}" обновлена.`)
        task.title = title ? title : task.title;
        task.priority = priority ? priority : task.priority;
        return task
    },
    sortTasks: function (parametr = 'id', desc = false) { // по дефолту - сортировка по id по возрастанию
        if (!desc) {
            return this.tasks.sort((a, b) => a[parametr] - b[parametr])
        }
        return this.tasks.sort((a, b) => b[parametr] - a[parametr])
    }
}


console.log('--- Добавление задач ---')
ToDoList.addTask(); // добавление дефолтной задачи "без названия"
ToDoList.addTask('Под удаление')
ToDoList.addTask('Приоритет', 1)
ToDoList.addTask('Средний приоритет', 2)

console.log('--- Удаление задач ---')
ToDoList.deleteTask(2)

console.log('--- Обновление задач ---')
ToDoList.updateTask(1, 'Да прибудет с тобой название', 4)
console.log(ToDoList.tasks)


console.log('--- Сортировка задач ---')
console.log(ToDoList.sortTasks('priority', true))

