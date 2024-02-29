function login() {
    const emailEl = document.querySelector("#email");
    const passWord = document.querySelector("#pwd");
    localStorage.setItem("email", emailEl.value);
    localStorage.setItem("passWord", passWord.value);
    window.location.href = "joincreate.html";
}