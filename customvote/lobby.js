function displayName() {
    if (localStorage.getItem("email")) {
        let playerName = localStorage.getItem("email");
        document.getElementById("player-name").textContent = playerName;
    } else {
        document.getElementById("player-name").textContent = "User";
    }
}