function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(email === "admin@gmail.com" && password === "123456") {
        window.location.href = "activation.html";
    } else {
        error.innerText = "Invalid credentials.";
    }
}