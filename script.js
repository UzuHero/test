const first_name = document.querySelector('#first-name'),
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

}

function createId(users) {
    return Object.keys(users).length;
}

first_name.oninput = function(){
    let test =/[a-zA-Z]+/g;
    let test2 = test.test(first_name.value);
    if(!test2){
        console.log(123);
    }
    else{
        console.log(first_name.value);
    }
}

const messageError = (element, message) => {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.invalid');

    errorMessage.innerText = message;
    inputControl.classList.add('.invalid')
}

form_button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(document.querySelectorAll('.validation_box')); 
    document.querySelectorAll('.validation_box').forEach(
        item => 
            {
                item.classList.remove('valid');
                item.classList.remove('invalid');
            });
    const first_nameUser=first_name.value;
    const last_nameUser=last_name.value;
    const birth_dayUser=birth_day.value;
    const emailUser=email.value;
    const passwordUser=password.value; 
    const password_confirmUser=password_confirm.value;


    passwordUser === password_confirmUser ? 
        document.querySelectorAll('.validation_box').forEach(
            item => 
                {item.classList.add('valid')})
        :
        document.querySelectorAll('.validation_box').forEach(
            item => 
                {item.classList.add('invalid')});

    const user = new User(first_nameUser, last_nameUser, birth_dayUser, emailUser, passwordUser)
    
    const userId = 'User' +createId(users);
    users[userId] = user; 

    console.log(users);
})
