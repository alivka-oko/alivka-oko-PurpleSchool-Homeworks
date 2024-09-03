'use strict'

let data = {
    title: 'Тест',
    description: 'тестовое описание',
    order: 0,
};

let data2 = {
    order: 10,
};

let updateData = {
    title: 'Обновленное название',
    description: 'Обновленное описание',
    order: 510,
}

const ToDoList = {
    tasks: [],
    lastIdTask: 0,
    getIdTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id == id)
        if (taskIndex === -1) {
            return false
        }
        return taskIndex
    },
    addTask(data) {
        if (!data) { data = {} }
        data.title = data.title || 'Без названия';
        data.description = data.description || 'Здесь описание'
        data.order = data.order === 0 ? 0 : data.order || 3
        data.id = ++this.lastIdTask;
        console.log(`Новая задача "${data.title}" создана!`)
        return this.tasks.push({ ...data })
    },
    deleteTask(id) {
        const taskIndex = this.getIdTask(id);
        if (!this.tasks[taskIndex]) {
            return console.log('Ошибка. Такой задачи не существует')
        }
        console.log(`Задача "${this.tasks[taskIndex].title}" удалена.`)
        return this.tasks.splice(taskIndex, 1)
    },
    updateTask(id, data) {
        const taskIndex = this.getIdTask(id);
        if (!this.tasks[taskIndex]) {
            return console.log('Ошибка. Такой задачи не существует')
        }
        const task = this.tasks[taskIndex];
        console.log(`Задача "${task.title}" обновлена.`)
        task.title = data.title ? data.title : task.title;
        task.description = data.description ? data.description : task.description;
        task.order = data.order === 0 ? data.order : data.order ? data.order : task.order;;
        return task
    },
    sortTasks(desc = false, parametr = 'id') { // по дефолту - сортировка по id по возрастанию
        if (!desc) {
            return this.tasks.sort((a, b) => a[parametr] - b[parametr])
        }
        return this.tasks.sort((a, b) => b[parametr] - a[parametr])
    }
}
const newTask = {
    tasks: [],
    lastIdTask: 0,
}

newTask.getIdTask = ToDoList.getIdTask.bind(newTask);
newTask.addTask = ToDoList.addTask.bind(newTask);
newTask.deleteTask = ToDoList.deleteTask.bind(newTask);
newTask.updateTask = ToDoList.updateTask.bind(newTask);
newTask.sortTasks = ToDoList.sortTasks.bind(newTask);

const newTaskGetIdTask = ToDoList.getIdTask.bind(newTask);
const newTaskaddTask = ToDoList.addTask.bind(newTask);
const newTaskdeleteTask = ToDoList.deleteTask.bind(newTask);
const newTaskupdateTask = ToDoList.updateTask.bind(newTask);
const newTasksortTasks = ToDoList.sortTasks.bind(newTask);

console.log('--- Добавление задач ---')
newTaskaddTask(); // добавление дефолтной задачи "без названия"
newTaskaddTask(data)
newTaskaddTask(data2)
newTaskaddTask(data)
newTaskaddTask();

newTaskaddTask({
    title: 'Еще задача'
});
console.log('--- Удаление задач ---')
newTaskdeleteTask(1)

console.log('--- Обновление задач ---')
newTaskupdateTask(2, updateData);


console.log('--- Сортировка задач ---')
newTasksortTasks(false, 'order')

console.log('--- newTask задач ---')
console.log(newTask.tasks)


