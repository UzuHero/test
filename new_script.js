const form_button = document.getElementById('form-button')
const isValidate = (name, nameFunc) => {
    console.log(nameFunc(name.value));
    if(nameFunc(name.value) === true){
        document.querySelector(`.validation_box.${name.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('valid'); 
        // error(name, false); errorNothing(name, false);
        // return true;
    // } else if(name.value === ''){
    //     document.querySelector(`.validation_box.${name.name}`).classList.remove('valid');
    //     document.querySelector(`.validation_box.${name.name}`).classList.add('invalid');
        // errorNothing(name, true);error(name, false);
        // return false;
    } else{
        document.querySelector(`.validation_box.${name.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${name.name}`).classList.add('invalid');
        // error(name, true); errorNothing(name, false);
        // return false;

}
}
// function upperCase(string){
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

const isValidName = (name) => {
    const re = /^[A-ZА-ЯЁ][a-zа-яё]{1,20}.+$/gm;
    console.log(re.test(name));
    return re.test(name);
};

const first_name = document.getElementById('first-name');
first_name.onblur = () => {
    // first_name.value = upperCase(first_name.value)
    isValidate(first_name, isValidName);
    // button_anDisable();
};
    
const last_name = document.getElementById('last-name');
last_name.onblur = () => {
    // last_name.value = upperCase(last_name.value);
    isValidate(last_name, isValidName); 
    // button_anDisable();
};

let testdate = 0;

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
        error(birth_day, true);errorDate(birth_day, false);
        return false;
    } else if(age>100){
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('invalid');
        errorDate(birth_day, true);error(birth_day, false);
        return false;
    }
    else{
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('valid'); 
        error(birth_day, false); errorDate(birth_day, false);
        testdate = age;
        return true;
    }
}
const isValidAge = () => {

    if(testdate < 18){
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('invalid');
        error(birth_day, true); errorDate(birth_day, false);
        return false;
    } else if(testdate>100){
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('invalid');
        errorDate(birth_day, true); error(birth_day, false);
        return false;
    } else{
        document.querySelector(`.validation_box.${birth_day.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${birth_day.name}`).classList.add('valid'); 
        error(birth_day, false); errorDate(birth_day, false);
        return true;
    };};
const birth_day = document.getElementById('birth-day');
birth_day.max=new Date().toISOString().split("T")[0];
document.getElementById('birth-day').valueAsDate = new Date();



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
password.onblur = () => {
    isValidate(password, isValidPassword); 
    button_anDisable();
};

const isValidPassword_confirm=(pass, pass_confirm)=>{
    if(pass_confirm.value===''){
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('invalid');
        errorNothing(password_confirm, true); error(password_confirm, false);
        return false;
    }
    else if (pass_confirm.value === pass.value && isValidPassword(pass_confirm.value)===true){
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('invalid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('valid'); 
        error(password_confirm, false); errorNothing(password_confirm, false)
        return true;
    } else{
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${pass_confirm.name}`).classList.add('invalid');
        error(password_confirm, true); errorNothing(password_confirm, false);
        return false;
    };
};
const password_confirm = document.getElementById('password-confirm');
password_confirm.onblur = () => {
    isValidPassword_confirm(password, password_confirm); 
    button_anDisable()
};

const pass = (password, password_confirm) => {
    if(password.value === password_confirm.value && isValidPassword(password_confirm.value)===true && isValidPassword(password.value)===true){
        errorNothing(password, false); error(password, false); errorNothing(password_confirm, false); error(password_confirm, false);
        return true;
    } else{
        document.querySelector(`.validation_box.${password_confirm.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${password_confirm.name}`).classList.add('invalid');
        if(password_confirm.value===''){
            errorNothing(password_confirm, true); error(password_confirm, false);
        } else{
            errorNothing(password_confirm, false); error(password_confirm, true);
        }
        document.querySelector(`.validation_box.${password.name}`).classList.remove('valid');
        document.querySelector(`.validation_box.${password.name}`).classList.add('invalid');
        if(password.value===''){
            errorNothing(password, true); error(password, false);
        } else{
            errorNothing(password, false); error(password, true);
        }
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

const errorDate = (inputName, show) => {
    const inputControl = inputName.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.errorDate');
    show? 
    errorDisplay.style.display = 'block'
    :
    errorDisplay.style.display = 'none';
};
const errorNothing = (inputName, show) => {
    const inputControl = inputName.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.errorNothing');
    show? 
    errorDisplay.style.display = 'block'
    :
    errorDisplay.style.display = 'none';
};

// const noInvalid =()=>{
//      document.querySelectorAll('.validation_box').forEach(
//         item => 
//             {
                
//             });
// }

const button_anDisable = () =>{
    (isValidate(first_name, isValidName) === true && isValidate(last_name, isValidName) === true && isValidate(email, isValidEmail) === true &&
    isValidate(password, isValidPassword)=== true && isValidPassword_confirm(password, password_confirm)===true && pass(password, password_confirm) === true && isValidAge()===true) ?
    form_button.disabled=false
    :
    form_button.disabled=true;
}

form_button.addEventListener('click', e=>{
    e.preventDefault();
    isValidate(first_name, isValidName);
    console.log(isValidate(first_name, isValidName));
    isValidate(last_name, isValidName);
    console.log(isValidate(last_name, isValidName));
    isValidate(email, isValidEmail);
    console.log(isValidate(email, isValidName));
    // isValidate(password, isValidPassword);
    // isValidPassword_confirm(password, password_confirm);
    pass(password, password_confirm);
    console.log(pass(password, password_confirm));
    isValidAge();
    console.log(isValidAge());
});


