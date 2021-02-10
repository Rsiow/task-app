class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    };
    addTask(name, description, assignedTo, dueDate, status) {
        this.currentId++;
        const taskAdd = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        };
        this.tasks.push(taskAdd);
    };

};