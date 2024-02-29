function displayName() {
    if (localStorage.getItem("userName")) {
        let playerName = localStorage.getItem("userName");
        document.getElementById("player-name").textContent = playerName;
    } else {
        document.getElementById("player-name").textContent = "User";
    }
}