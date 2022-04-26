
const form = document.getElementById('form');

form.onsubmit = function(event){
    event.preventDefault();
    const name = document.getElementById('first').value;
    const secondName = document.getElementById('second').value;

    console.log(`Ім'я: ${name}`);
    console.log(`Прізвище: ${secondName}`);
}