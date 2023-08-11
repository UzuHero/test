const form = document.querySelector('#form'),
    first_name = document.querySelector('#first-name'),
    last_name = document.querySelector('#last-name'),
    birth_day = document.querySelector('#birth-day'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    password_confirm = document.querySelector('#password-confirm'),
    form_button = document.querySelector('#form-button');

const users = {};

function User(first_name, last_name, birth_day, email, password){
    this.first_name=first_name;
    this.last_name=last_name;
    this.birth_day=birth_day;
    this.email=email;
    this.password=password;
};

function createId(users) {
    return Object.keys(users).length;
};


const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const isValidName = (name) => {
    const re = /^[A-ZА-ЯЁ][a-zа-яё]{1,20}+$/;
    return re.test(String(name));
};

const isValidPassword = (password) => {
    const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(String(password));
};

    birth_day.max=new Date().toISOString().split("T")[0];

const validateInput = () =>{
    const first_nameValue = first_name.value.trim(),
        last_nameValue = last_name.value.trim(),
        birth_dayValue = birth_day.value.trim(),
        emailValue = email.value.trim(),
        passwordValue = password.value.trim(),
        password_confirmValue = password_confirm.value.trim();
        
    
    if (first_nameValue === '') {
        setError(first_name, 'Это поле обязательно для заполнения!');
    } else if (!isValidName(first_nameValue)) {
        setError(first_name, 'Имя должно содержать только буквы!');
    } else {
        setSusses(first_name);
    }

    if (last_nameValue === '') {
        setError(last_name, 'Это поле обязательно для заполнения!');
    } else if (!isValidName(last_nameValue)) {
        setError(last_name, 'Имя должно начинаться с заглавной и содержать только буквы!');
    } else {
        setSusses(last_name);
    }

    if(emailValue === '') {
        setError(email, 'Это поле обязательно для заполнения!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Вы ввели неккоректный электронный адрес!');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Это поле обязательно для заполнения!');
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Минимальная длина пароля 8 символов. Пароль должен содержать минимум одну цифру, специальный символ, по одной заглавной и строчную буквы латиницы!')
    } else {
        setSuccess(password);
    }

    if(password_confirmValue === '') {
        setError(password_confirm, 'Это поле обязательно для заполнения!');
    } else if (password_confirmValue !== passwordValue) {
        setError(password_confirm, "Пароли не совпадают!");
    } else {
        setSuccess(password_confirm);
    }
    if(birth_dayValue===0){

    }
};
 
const messageError = (element, message) => {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.invalid');

    errorMessage.innerText = message;
    inputControl.classList.add('.invalid')
}
