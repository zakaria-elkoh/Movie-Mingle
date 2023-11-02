// Form validation :
const form = document.getElementById('form');
const email = document.getElementById('form-email');
const password = document.getElementById('form-password');
const username = document.getElementById('form-username');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const usernameValue = username.value.trim();
    // for Username :
    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be Blank');
    }
    else if(!isUsername(usernameValue)){
        setErrorFor(username, 'Unvalid Username.');
    }
    else{
        setSuccessFor(username);
    }
    // for Email.
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be Blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }
    // for Password.
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be Blank');
    }
    else{
        setSuccessFor(password);
    }
}
function isEmail(email){
   return  /^[a-z0-9]+@[a-z]+.[a-z]{2,3}$/.test(email);
}
function isUsername(username){
    return /^[a-zA-Z0-9_-]{3,16}$/.test(username);
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;

    //add Error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    //add Error class
    formControl.className = 'form-control success';
}