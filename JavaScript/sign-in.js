const email = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

const data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
console.log(data);

let email2;
let password;

data.forEach(element => {
    email2 = element.email;
    password = element.password;
});




function volidate(){
    if(!passwordInput.value){
        passwordInput.focus();
        passwordInput.style.outlineColor = 'red';
    }

    if(!email.value){
        email.focus();
        email.style.outlineColor = 'red';
    }
}


btn && btn.addEventListener('click', function () {
    let hmail = email.value;
    volidate();
    if (email.value == email2  && password == passwordInput.value) {
        window.location.href = "http://127.0.0.1:5500/HTML/user.html"; 
    } else{
        alert("Kiritilgan ma'lumotlar to'g'ligini tekshiring");
    };

})
