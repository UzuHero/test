const form_button = document.getElementById('form-button')
const isValidate = (name, nameFunc) => {
    if(nameFunc(name.value) === true){
        document.querySelector(`.validation_box.${name.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('valid'); 
        error(name, false);
        return true;
    } else{
        document.querySelector(`.validation_box.${name.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('invalid');
        error(name, true);
        return false;
    };
}

const isValidName = (name) => {
    const re = /^[A-ZА-ЯЁ][a-zа-яё]{1,20}.+$/gm;
    return re.test(name);
};

const first_name = document.getElementById('first-name');
first_name.onblur = () => {
    isValidate(first_name, isValidName);
    button_anDisable();
};
    
const last_name = document.getElementById('last-name');
last_name.onblur = () => {isValidate(last_name, isValidName);button_anDisable()};


const isValidAge = (event)=>{
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
    const dob = new Date(event.target.value);
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
      age = age-1;
    }
    if (age<18){
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('valid'),
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('invalid'), error(birth_day, true);
        return false;
    } else{
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('invalid'),
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('valid'), error(birth_day, false);
        return true;
    }
}

const birth_day = document.getElementById('birth-day');
birth_day.max=new Date().toISOString().split("T")[0];
// document.getElementById('birth-day').valueAsDate = new Date();
// isValidAge();

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const email = document.getElementById('email');
email.onblur = () => {isValidate(email, isValidEmail); button_anDisable()};

const isValidPassword = (password) => {
    const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(String(password));
};

const password = document.getElementById('password');
password.onblur = () => {isValidate(password, isValidPassword); button_anDisable()};

const isValidPassword_confirm=(pass, pass_confirm)=>{
    if (pass_confirm.value === pass.value && isValidPassword(pass_confirm.value)===true){
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('invalid'),
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('valid'), error(password_confirm, false);
        return true;
    } else{
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('valid'),
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('invalid'), error(password_confirm, true);
        return false;
    }
};
const password_confirm = document.getElementById('password-confirm');
password_confirm.onblur = () => {isValidPassword_confirm(password, password_confirm); button_anDisable()};

const pass = (password, password_confirm) => {
    if(password.value === password_confirm.value && isValidPassword(password_confirm.value)===true && isValidPassword(password.value)===true){ 
        document.querySelector(`.validation_box.${password_confirm.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${password_confirm.name}`).classList.add('valid');
        error(password_confirm, false);
        document.querySelector(`.validation_box.${password.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${password.name}`).classList.add('valid');
        error(password_confirm, false);
        return true;
    } else{
        document.querySelector(`.validation_box.${password_confirm.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${password_confirm.name}`).classList.add('invalid');
        error(password_confirm, true);
        document.querySelector(`.validation_box.${password.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${password.name}`).classList.add('invalid');
        error(password_confirm, true);
        return false;
    }
};


const error = (inputName, show) => {
    const inputControl = inputName.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    show? 
    errorDisplay.style.display = 'block'
    :
    errorDisplay.style.display = 'none';
};

console.log(isValidate(first_name, isValidName));
const button_anDisable = () =>{
    console.log(isValidate(first_name, isValidName) === true && isValidate(last_name, isValidName) === true && isValidate(email, isValidEmail) === true && pass(password, password_confirm) === true);
    isValidate(first_name, isValidName) === true && isValidate(last_name, isValidName) === true && isValidate(email, isValidEmail) === true && pass(password, password_confirm) === true ?
    form_button.disabled=false
    :
    form_button.disabled=true;
    console.log(123)
}

form_button.addEventListener('click', e=>{
    e.preventDefault();
    isValidate(first_name, isValidName);
    isValidate(last_name, isValidName);
    isValidate(email, isValidEmail);
    isValidate(password, isValidPassword);
    isValidPassword_confirm(password, password_confirm);
    pass(password, password_confirm);
    // isValidAge();
});


