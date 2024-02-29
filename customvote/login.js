function login() {
    const userEl = document.querySelector("#username");
    const passWord = document.querySelector("#pwd");
    localStorage.setItem("userName", userEl.value);
    localStorage.setItem("passWord", passWord.value);
    window.location.href = "joincreate.html";
}