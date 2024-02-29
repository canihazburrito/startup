function displayName() {
    if (localStorage.getItem("userName")) {
        let playerName = localStorage.getItem("userName");
        document.getElementById("player-name").textContent = playerName;
    } else {
        document.getElementById("player-name").textContent = "User";
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

    localStorage.setItem("lobbyCode", code.join(""));
    window.location.href = "lobby.html";
}

function joinCode() {
    const codeEl = document.querySelector("#joincode");
    localStorage.setItem("lobbyCode", codeEl.value);
    window.location.href = "lobby.html";
}