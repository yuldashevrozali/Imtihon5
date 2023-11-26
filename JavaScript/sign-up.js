const btn = document.getElementById('btn');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const emailInput = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validate() {
    let isValidEmail = validateEmail(emailInput.value);

    if (!password.value) {
        password.focus();
        password.style.outlineColor = 'red';
    }

    if (!isValidEmail) {
        emailInput.focus();
        emailInput.style.outlineColor = 'red';
    }

    if (!surname.value) {
        surname.focus();
        surname.style.outlineColor = 'red';
    }

    if (!name.value) {
        name.focus();
        name.style.outlineColor = 'red';
    }

    return isValidEmail; 
}

btn && btn.addEventListener('click', function (event) {
    event.preventDefault();

    let isValid = validate();

    if (name.value && surname.value && isValid && password.value) {
        
        try {
            let data = JSON.parse(localStorage.getItem('users')) || [];

            const userData = {
                name: name.value,
                surname: surname.value,
                email: email.value,
                password: password.value
            };

            data.push(userData);

            localStorage.setItem('users', JSON.stringify(data));
            console.log(data);
            form.reset();
        } catch (error) {
            console.error('Xatolik yuz berdi', error);
        }
    } else {
        alert("Iltimos, hamma maydonlarni to'g'ri to'ldiring.");
    }
});

