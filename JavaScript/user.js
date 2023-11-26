const data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
console.log(data);

const ul = document.getElementById('ul');

data.forEach(element => {
    const name = element.name;
    const surname = element.surname;
    const email = element.email;
    const password = element.password;

    let li = document.createElement('li');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    li.textContent = name;
    li1.textContent = surname;
    li2.textContent = email;
    li3.textContent = password;
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
});

const save = document.querySelectorAll('div');
// let storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
// storedUsers.forEach(element => {
//     let one = element
// });
// let name = storedUsers.malumot;