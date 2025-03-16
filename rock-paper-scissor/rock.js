
const choices = ["rock", "paper", "scissors"]; // Fixed spelling

const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");

let playerscore1 = 0;
let computerscore1 = 0;

function playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    // Update the UI properly
    playerdisplay.textContent = `Player: ${playerChoice}`;
    computerdisplay.textContent = `Computer: ${computerChoice}`;
    resultdisplay.textContent = result;

    // Remove previous color classes
    resultdisplay.classList.remove("greentext", "redtext");

    if (result === "YOU WIN") {
        resultdisplay.classList.add("greentext");
        playerscore1++;
        playerscore.textContent = playerscore1;
    } else if (result === "YOU LOSE") {
        resultdisplay.classList.add("redtext");
        computerscore1++;
        computerscore.textContent = computerscore1;
    }
}
