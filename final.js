const form_button = document.getElementById('form-button'),
    first_name = document.getElementById('first-name'),
    last_name = document.getElementById('last-name'),
    birth_day = document.getElementById('birth-day'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    password_confirm = document.getElementById('password-confirm'),
    showPassword = document.getElementById('password-checkbox');
let testdate = 0;
birth_day.max=new Date().toISOString().split("T")[0];
document.getElementById('birth-day').valueAsDate = new Date();



form_button.addEventListener('click', e=>{
    e.preventDefault();
    isValidate(first_name, isValidName);
    isValidate(last_name, isValidName);
    isValidate(email, isValidEmail);
    isValidate(password, isValidPassword);
    isValidPassword_confirm(password, password_confirm);
    isValidAge();
});


const isValidName = (name) => {
    const re = /^[A-ZА-ЯЁ][a-zа-яё]{1,20}.+$/gm;
    return re.test(name);
};
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const isValidPassword = (password) => {
    const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(String(password));
};



first_name.onblur = () => {
    first_name.value = upperCase(first_name.value)
    isValidate(first_name, isValidName);
};
last_name.onblur = () => {
    last_name.value = upperCase(last_name.value);
    isValidate(last_name, isValidName); 
};
email.onblur = () => {
    isValidate(email, isValidEmail); 
};
password.onblur = () => {
    isValidate(password, isValidPassword); 
};
password_confirm.onblur = () => {
    isValidPassword_confirm(password, password_confirm);
};


function upperCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const isValidate = (name, nameFunc) => {
    if(nameFunc(name.value) === true){
        document.querySelector(`.validation_box.${name.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('valid');
    } else{
        document.querySelector(`.validation_box.${name.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('invalid');
    }
};

const isCheckValidAge = (event)=>{
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
    } 
    else{
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('valid'); 
        testdate = age;
    }
}
const isValidAge = () => {
    if (testdate < 18){
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('invalid');
    } else{
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('valid'); 
    }
};

const isValidPassword_confirm=(pass, pass_confirm)=>{
    if (pass_confirm.value === pass.value&&pass_confirm.value!==''){
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('valid'); 
    } else{
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('invalid');
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