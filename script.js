let loginForm = document.getElementById("login");
let signupForm = document.getElementById("signup");

function showLogin() {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
}

function showSignUp() {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
}