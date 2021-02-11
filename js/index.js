// Variables for the input fields within the forms
const description = document.querySelector('#description');
const name2 = document.querySelector('#name');
const assignedPerson = document.querySelector('#assigned-person');
const dateItself = document.querySelector('#date-input');
const statusCheck = document.querySelector('#status');
const submitButton = document.querySelector('#submit-button');
let currentIdValue = 0;

// Submitting will validate check all inputs
submitButton.addEventListener('click', (event) => {
    let nameValue = name2.value;
    let descriptionValue = description.value;
    let assignedPersonValue = assignedPerson.value;
    let dateValue = dateItself.value;
    let statusValue = statusCheck.value;
    event.preventDefault();

    if (nameValue.length > 5) {
        name2.classList.add('is-valid');
        name2.classList.remove('is-invalid');
    } else {
        name2.classList.add('is-invalid');
        name2.classList.remove('is-valid');
        return false;

    };
    if (descriptionValue.length > 5) {
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
    } else {
        description.classList.add('is-invalid');
        description.classList.remove('is-valid');
        return false;
    };

    if (assignedPersonValue.length > 5) {
        assignedPerson.classList.add('is-valid');
        assignedPerson.classList.remove('is-invalid');
    } else {
        assignedPerson.classList.add('is-invalid');
        assignedPerson.classList.remove('is-valid');
        return false;
    };
    if (dateValue != '') {
        dateItself.classList.add('is-valid');
        dateItself.classList.remove('is-invalid');
    } else {
        dateItself.classList.add('is-invalid');
        dateItself.classList.remove('is-valid');
        return false;
    };
    if (statusValue != '') {
        statusCheck.classList.add('is-valid');
        statusCheck.classList.remove('is-invalid');
    } else {
        statusCheck.classList.add('is-invalid');
        statusCheck.classList.remove('is-valid');
        return false;
    };
    // currentIdValue++;
    let newTask = new TaskManager(0);
    newTask.addTask(nameValue, descriptionValue, assignedPersonValue, dateValue, statusValue);
    console.log(newTask.tasks);
    // newTask.render()

    // const taskHtml = createTaskHtml(nameValue, descriptionValue, assignedPersonValue, dateValue, statusValue);
    // console.log(taskHtml);

    name2.value = '';
    name2.classList.remove('is-valid');
    description.value = '';
    description.classList.remove('is-valid');
    assignedPerson.value = '';
    assignedPerson.classList.remove('is-valid');
    dateItself.value = '';
    dateItself.classList.remove('is-valid');
    statusCheck.value = '';
    statusCheck.classList.remove('is-valid');


});

