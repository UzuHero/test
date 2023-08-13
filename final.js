const form_button = document.getElementById('form-button'),
    first_name = document.getElementById('first-name'),
    last_name = document.getElementById('last-name'),
    birth_day = document.getElementById('birth-day'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    password_confirm = document.getElementById('password-confirm'),
    showPassword = document.getElementById('password-checkbox');
birth_day.max=new Date().toISOString().split("T")[0];
document.getElementById('birth-day').valueAsDate = new Date();


form_button.addEventListener('click', e=>{
    e.preventDefault();
    if (isValidate(first_name, isValidName) === true && isValidate(last_name, isValidName) === true && isValidate(email, isValidEmail) === true &&
    isValidate(password, isValidPassword)=== true && isValidPassword_confirm(password, password_confirm)===true && isValidAge()===true){
        const user = new User(first_name.value, last_name.value, birth_day.value, email.value, password.value);
        const userId = 'User' + createId(users);
        users[userId] = user;
        console.log(users)
    } else {
        console.log('error');
    }
    clear();
});


function User(first_name, last_name, birth_day, email, password){
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth_day = birth_day;
    this.email = email;
    this.password = password;
};
function createId(users) {
    return Object.keys(users).length;
};
const button_anDisable = () =>{
    (document.querySelectorAll('.validation_box.invalid'))?
    form_button.disabled=false
    :
    form_button.disabled=true;
}

const isValidName = (name) => {
    const re = /^(?=^.{1,20}$)([A-ZА-ЯЁ][a-zа-яё]+[^0-9])$/gm;
    let result = re.test(name);
    return result;
};
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(email).toLowerCase());
    return result;
};
const isValidPassword = (password) => {
    const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let result = re.test(String(password));
    return result;
};

first_name.onblur = () => {
    first_name.value = edit(first_name.value);
    isValidate(first_name, isValidName);
    button_anDisable();
};
last_name.onblur = () => {
    last_name.value = edit(last_name.value);
    isValidate(last_name, isValidName); 
    button_anDisable();
};
email.onblur = () => {
    email.value = email.value.replace(/\s/g, '');
    isValidate(email, isValidEmail); 
    button_anDisable();
};
password.onblur = () => {
    password.value = editPass(password.value);
    isValidate(password, isValidPassword); 
    button_anDisable();
};
password_confirm.onblur = () => {
    password_confirm.value = editPass(password_confirm.value);
    isValidPassword_confirm(password, password_confirm);
    button_anDisable();
};
birth_day.onblur = () => {
    isValidAge();
    button_anDisable();
}

const edit = (name)=> {
    name = name.replace(/[0-9]/g,'');
    name = name.replace(/\s/g, '');
    name = name.replace(/[^a-zа-яё]/gi, '');
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return name;
};
const editPass = (pass)=> {
    pass = pass.replace(/\s/g, '');
    pass = pass.replace(/[а-яё]/gi, '');
    return pass;
};
const isValidate = (name, nameFunc) => {
    if(nameFunc(name.value) === true){
        document.querySelector(`.validation_box.${name.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('valid');
        errorNothing(name, false); error(name, false);
        return true;
    } else if(name.value === ''){
        document.querySelector(`.validation_box.${name.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('invalid');
        errorNothing(name, true); error(name, false);
        return false;
    } else{
        document.querySelector(`.validation_box.${name.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('invalid');
        errorNothing(name, false); error(name, true);
        return false; 
    }
};
const isValidAge = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
    const dob = new Date(event.target.value);
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
      age = age-1;
    }
    if (age<18){
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('invalid');
        error(birth_day, true); errorNothing(birth_day, false);
        return false; 
    } 
    else if(age>110){
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('invalid');
        error(birth_day, false); errorNothing(birth_day, true);
        return false ;
    }
    else{
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('valid'); 
        error(birth_day, false); errorNothing(birth_day, false);
        return true;
    }
};

const isValidPassword_confirm=(pass, pass_confirm)=>{
    if (pass_confirm.value === pass.value && pass_confirm.value !== ''){
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('valid');
        error(pass_confirm, false);errorNothing(pass_confirm, false);
        return true; 
    } else if(pass_confirm.value === ''){
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('invalid');
        errorNothing(pass_confirm, true); error(pass_confirm, false);
        return false;
    } else{
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('invalid');
        errorNothing(pass_confirm, false); error(pass_confirm, true);
        return false;
    }
}

showPassword.onclick = (()=>{
    if(password.type === 'password'&&password_confirm.type === 'password'){
        password.type = 'text';
        password_confirm.type='text';
    } else{
        password.type = 'password';
        password_confirm.type = 'password';}
  }
  );

const errorNothing = (inputName, show) => {
    const inputControl = inputName.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.errorNothing');
    show? 
    errorDisplay.style.display = 'block'
    :
    errorDisplay.style.display = 'none';
};
const error = (inputName, show) => {
    const inputControl = inputName.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    show? 
    errorDisplay.style.display = 'block'
    :
    errorDisplay.style.display = 'none';
};

const clear = () => {
    first_name.value = '';
    last_name.value = '';
    email.value = '';
    password.value = '';
    password_confirm.value = '';
    birth_day.value = '';
    document.querySelectorAll('.validation_box').forEach(
        item => 
            {
                item.classList.remove('valid');
                item.classList.remove('invalid');
            });
  }