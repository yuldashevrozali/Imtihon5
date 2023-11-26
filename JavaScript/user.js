const ul = document.getElementById('saqlanganlar');
let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
storedUsers.forEach(element => {
    let li = document.createElement('li');
    li.textContent = element.malumot;
    ul.appendChild(li);
});

