const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const html = `
    <li id="individual-card" class="card" data-task-id="${id}" style="min-width: 50vw">
        <div class="card-body">
            <span class="card-title font-weight-bold mr-2">TASK AT HAND: </span><span class="text-capitalize text-monospace">${name}</span>
            <br>
            <br>
            <span class="card-text font-weight-bold mr-2">TASK DESCRIPTION: </span><span class="text-capitalize text-monospace">${description}</span>
            <br>
            <br>
            <span class="text-capitalize text-monospace">${assignedTo}</span><span class="card-text font-weight-bold ml-2">IS ON THE JOB!</span>
            <br>
            <br>
            <span class="card-text font-weight-bold mr-2">COMPLETE BY: </span><span class="text-monospace">${dueDate}</span>
            <div class="card-footer row mt-4">
                <div class="col-6">
                    <p class="card-text mt-1 font-weight-bold font-italic">STATUS: ${status}</p>
                </div>
                <div class="col-3">
                    <button id="done-invisible" class="btn btn-outline-success done-button">
                        Done
                    </button>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-danger delete-button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </li>
    `;
    return html;
};

class TaskManager {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];
    };
    addTask(name, description, assignedTo, dueDate, status) {
        const taskAdd = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        };
        this.tasks.push(taskAdd);
    };
    render() {
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const date = new Date(task.dueDate);
            let formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(taskHtml);
        };
        // tasksList is tasksHtml in aaron's instructions, task 6, step 2, #4
        let tasksList = tasksHtmlList.join('\n');

        goToTasks.innerHTML = tasksList;
    };
    getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.id === taskId) {
                foundTask = task;
            };
        }
        return foundTask
    };
    save() {
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        let currentId = JSON.stringify(this.currentId);
        localStorage.setItem('currentId', currentId);
    };
    load() {
        if (localStorage.getItem('tasks')) {
            let tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        };
        if (localStorage.getItem('currentId')) {
            let currentId = localStorage.getItem('currentId');
            currentId = Number(currentId);
            this.currentId = JSON.parse(currentId);
        };
    };
    delete(taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id !== taskId) {
                newTasks.push(task);
            };
        };
        this.tasks = newTasks;
    };
};

module.exports = TaskManager;