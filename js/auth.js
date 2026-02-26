// Block access if not logged in
function checkLogin() {
    if(sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

// Block activation page if settings not finished
function checkSettings() {
    if(sessionStorage.getItem("settingsDone") !== "true") {
        window.location.href = "settings.html";
    }
}