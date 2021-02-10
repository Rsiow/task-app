//Variables for the forms
const nameInput = document.querySelector('#name-input');
const descriptionInput = document.querySelector('#description-input');
const assignedInput = document.querySelector('#assigned-input');
const dateInput = document.querySelector('#date-target');
const statusInput = document.querySelector('#status-input');

// Variables for the input fields within the forms
const description = document.querySelector('#description');
const name2 = document.querySelector('#name');
const assignedPerson = document.querySelector('#assigned-person');
const dateItself = document.querySelector('#date-input');
const statusCheck = document.querySelector('#status');
const submitButton = document.querySelector('#submit-button');

// Submitting will validate check all inputs
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (name2.value.length > 5) {
        name2.classList.add('is-valid');
        name2.classList.remove('is-invalid');
    } else {
        name2.classList.add('is-invalid');
        name2.classList.remove('is-valid');
    };
    if (description.value.length > 5) {
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
    } else {
        description.classList.add('is-invalid');
        description.classList.remove('is-valid');
    };

    if (assignedPerson.value.length > 5) {
        assignedPerson.classList.add('is-valid');
        assignedPerson.classList.remove('is-invalid');
    } else {
        assignedPerson.classList.add('is-invalid');
        assignedPerson.classList.remove('is-valid');
    };
    if (dateItself.value != '') {
        dateItself.classList.add('is-valid');
        dateItself.classList.remove('is-invalid');
    } else {
        dateItself.classList.add('is-invalid');
        dateItself.classList.remove('is-valid');
    };
    if (statusCheck.value != '') {
        statusCheck.classList.add('is-valid');
        statusCheck.classList.remove('is-invalid');
    } else {
        statusCheck.classList.add('is-invalid');
        statusCheck.classList.remove('is-valid');
    };
});
