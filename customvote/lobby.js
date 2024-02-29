function displayInfo() {
    if (localStorage.getItem("userName")) {
        let playerName = localStorage.getItem("userName");
        document.getElementById("player-name").textContent = playerName;
    } else {
        document.getElementById("player-name").textContent = "User";
    }

    if (localStorage.getItem("lobbyCode")) {
        let lobbyCode = localStorage.getItem("lobbyCode");
        document.getElementById("codeDisplay").textContent = lobbyCode;
    } else {
        document.getElementById("codeDisplay").textContent = "ERROR: INVALID CODE";
    }

    if (localStorage.getItem("title")) {
        let savedTitle = localStorage.getItem("title");
        document.getElementById("title").value = savedTitle;
    }
}

function createCode() {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const code = new Array(6);
    let randomIndex;

    for (let i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * 36);
        code[i] = char[randomIndex];
    }

    localStorage.removeItem("title");
    localStorage.setItem("lobbyCode", code.join(""));
    window.location.href = "lobby.html";
}

function joinCode() {
    const codeEl = document.querySelector("#joincode");
    localStorage.setItem("lobbyCode", codeEl.value);
    window.location.href = "lobby.html";
}

function saveTitle() {
    let titleEl = document.getElementById("title").value;
    localStorage.setItem("title", titleEl);
    location.reload();
}