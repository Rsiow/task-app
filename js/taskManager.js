const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const html = `<li id="individual-card" class="card" data-task-id="${id}" style="min-width: 50vw">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">
                    ${description}
                </p>
                <p class="card-text">${assignedTo} To</p>
                <p class="card-text">${dueDate}</p>
                <div class="card-footer row">
                    <div class="col-6">
                        <p class="card-text"><b>${status}</b></p>
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
            </li>`;
    return html;
};

class TaskManager {
    constructor(currentId) {
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
    }
};