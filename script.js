const firstName = document.querySelector("#firstName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const firstNameError = document.querySelector(".firstNameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const confirmPasswordError = document.querySelector(".confirmPasswordError");
const button = document.querySelector("button");

firstName.addEventListener("input",function(){
    if(firstName.value === ""){
        firstNameError.innerHTML = "Please enter your first name";
    }else{
        firstNameError.innerHTML = "";
    }
});

email.addEventListener("input", function(event){
    if(email.value === ""){
        emailError.innerHTML = "Please enter your email";
    }else{
        emailError.innerHTML = "";
    }
});

password.addEventListener("input", function(event){
    if(password.value === ""){
        passwordError.innerHTML = "Please enter your password";
    }else{
        passwordError.innerHTML = "";
    }
});

confirmPassword.addEventListener("input", function(event){
    if(confirmPassword.value === ""){
        confirmPasswordError.innerHTML = "Please confirm your password";
    }else{
        confirmPasswordError.innerHTML = "";
    }
});

button.addEventListener("click",(e)=>{
    if(password.value !== confirmPassword.value){
        confirmPasswordError.innerHTML = "Passwords do not match";
        /* cancel form submit */
        e.preventDefault();
    }
});