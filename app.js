// all the events are handled in this file
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateLoginForm();


        /*/get the login form data
    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;

    //log this data in the browser console
    console.log("Username: " + loginUsername);
    console.log("Password: " + loginPassword); 

    //alert the user that they have successfully logged in
    //alert("You have successfully logged in!");

   const message = document.getElementById('message');
    message.textContent = "You have successfully logged in!";
    message.style.color = "green";*/
    });
}

function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        const message = document.getElementById('message');
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return false;
    }else {
        const message = document.getElementById('message');
        message.textContent = "Login successful!";
        message.style.color = "green";
        //alert('Login successful!');
        return true;
    }
}

const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateSignupForm();

        /*/get the signup form data
   const signupUsername = document.getElementById('name').value;
   const signupPassword = document.getElementById('create-password').value;
   const signupConfirmPassword = document.getElementById('confirm-password').value;
   const signupEmail = document.getElementById('email').value;
   const signupPhone = document.getElementById('phone').value;
   const signupAge = document.getElementById('age').value;
   const signupSex = document.getElementById('sex').value;

   //log this data in the browser console
   console.log("Username: " + signupUsername);
   console.log("Password: " + signupPassword);
   console.log("Confirm Password: " + signupConfirmPassword);
   console.log("Email: " + signupEmail);
   console.log("Phone: " + signupPhone);
   console.log("Age: " + signupAge);
   console.log("Sex: " + signupSex);  

   //alert the user that they have successfully signed up
   //alert("You have successfully signed up!");

   const message = document.getElementById('message');
   message.textContent = "You have successfully signed up!";
   message.style.color = "green";*/
    });
}

function validateSignupForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('create-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;

    if (name === '' || password === '' || confirmPassword === '' || email === '' || phone === '' || age === '' || sex === '') {
        const message = document.getElementById('message');
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return false;
    }
    if (password !== confirmPassword) {
        const message = document.getElementById('message');
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return false;
    }
    const message = document.getElementById('message');
    message.textContent = "Signup successful!";
    message.style.color = "green";
    return true;
}
