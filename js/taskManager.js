const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `<li class="card" style="min-width: 50vw">
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
                        <button class="btn btn-outline-success done-button">
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
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
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
    // render() {
    //     console.log('l;kjelkjdasflkj');
    //     let tasksHtmlList = [];
    //     this.tasks.forEach(element => {
    //         let task = this.tasks[element];
    //         let date = new Date(task.dueDate);
    //         let formattedDate = date.toDateString();
    //         let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.formattedDate, task.status);
    //         tasksHtmlList.push(taskHtml);
    //     });
    //     let taskList = tasksHtmlList.join('\n');
    //     document.querySelector('#task-card').innerHTML = tasksHtml;
    // }
    // render() {
    //     let tasksHtmlList = [];
    //     this.tasks.forEach(element => {
    //         tasksHtmlList = this.tasks;
    //         // console.log(tasksHtmlList);
    //         let taskHtml = createTaskHtml(element)
    //         console.log(taskHtml);
    //         let date = new Date(task.dueDate);
    //         let formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    //     });
    // };
};