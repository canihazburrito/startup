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

    clearInfo();
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

function clearInfo() {
    localStorage.removeItem("title");
}

let options = [];

window.onload = function() {
    const storedOptions = localStorage.getItem('options');
    if (storedOptions) {
        options = JSON.parse(storedOptions);
        updateTable();
        updateDropdown();
    }
};

function addOption(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    const newOption = document.getElementById('newopt').value;

    // Check if the option already exists
    if (!options.includes(newOption)) {
        options.push(newOption);

        // Update localStorage with the new options
        localStorage.setItem('options', JSON.stringify(options));

        // Update the table with the new option
        updateTable();

        // Update the dropdown list with the new option
        updateDropdown();
    }

    // Clear the input field after adding the option
    document.getElementById('newopt').value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');

    // Clear the table body
    tableBody.innerHTML = '';

    // Iterate over the options array and create a new row for each option
    options.forEach(option => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${option}</td>
            <td data-votes="0">0</td>
        `;
        tableBody.appendChild(tr);
    });
}

function updateDropdown() {
    const select = document.getElementById('vote-select');

    // Clear the dropdown list
    select.innerHTML = '';

    // Create a default option for the dropdown list
    const defaultOption = document.createElement('option');
    defaultOption.textContent = '--Choose an option--';
    defaultOption.value = '';
    select.appendChild(defaultOption);

    // Iterate over the options array and create a new option for each option
    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.textContent = option;
        newOption.value = option;
        select.appendChild(newOption);
    });
}

function vote() {
        const selectedOption = document.getElementById('vote-select').value;
        const voteCell = document.querySelector(`td[data-votes="${selectedOption}"]`);

        // Increment the vote count for the selected option
        const votes = parseInt(voteCell.textContent) + 1;
        voteCell.textContent = votes;

        // Update the options array with the new vote count
        options = options.map(option => {
            if (option === selectedOption) {
                return votes.toString();
            }
            return option;
        });

        // Update localStorage with the new options
        localStorage.setItem('options', JSON.stringify(options));

        // Update the dropdown list with the new vote count
        updateDropdown();
    }