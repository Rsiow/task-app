const nameInput = document.querySelector('#name-input');
const descriptionInput = document.querySelector('#description-input');
const assignedInput = document.querySelector('#assigned-input');
const dateInput = document.querySelector('#date-target');
const statusInput = document.querySelector('#status-input');

const description = document.querySelector('#description')
const name2 = document.querySelector('#name')
const assignedPerson = document.querySelector('#assigned-person')
const dateItself = document.querySelector('#date-input')
const statusCheck = document.querySelector('#status')
const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(statusCheck.value);
    // console.log(dateItself.value);
    // console.log(assignedPerson.value);
    // console.log(description.value);
    // console.log(name2.value);
    if (name2.value.length > 5) {
        console.log(name2.value);
        name2.classList.add('is-valid');
        name2.classList.remove('is-invalid');
    } else {
        console.log('Name is too short!');
        name2.classList.add('is-invalid');
        name2.classList.remove('is-valid');
    };
    if (description.value.length > 5) {
        console.log(description.value);
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
    } else {
        console.log('Description is too short!');
        description.classList.add('is-invalid');
        description.classList.remove('is-valid');
    };

    if (assignedPerson.value.length > 5) {
        console.log(assignedPerson.value);
        assignedPerson.classList.add('is-valid');
        assignedPerson.classList.remove('is-invalid');
    } else {
        console.log('Assigned person\'s name is too short!');
        assignedPerson.classList.add('is-invalid');
        assignedPerson.classList.remove('is-valid');
    };
    if (dateItself.value != '') {
        console.log(dateItself.value);
        dateItself.classList.add('is-valid');
        dateItself.classList.remove('is-invalid');
    } else {
        console.log('Put a date damn you!');
        dateItself.classList.add('is-invalid');
        dateItself.classList.remove('is-valid');
    };
    if (statusCheck.value != '') {
        console.log(statusCheck.value);
        statusCheck.classList.add('is-valid');
        statusCheck.classList.remove('is-invalid');
    } else {
        console.log('You gotta choose a status, human.');
        statusCheck.classList.add('is-invalid');
        statusCheck.classList.remove('is-valid');
    };
})


// nameInput.addEventListener('click', (event) => {
//     event.preventDefault();
    // if (name2.value.length > 5) {
    //     console.log(name2.value);
    // } else {
    //     console.log('Too short!');
    // }
// })

// descriptionInput.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(description.value);
// })

// assignedInput.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(assignedPerson.value);
// })

// dateInput.addEventListener('mousedown', (event) => {
//     event.preventDefault();
//     console.log(dateItself.value);
// })

// statusInput.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(statusCheck.value);
// })

