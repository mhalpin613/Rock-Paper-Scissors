let playerScore = 0;
let cpuScore = 0;
let winner;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("score");
const playerMove = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

function checkRoundWinner (playerChoice, cpuPick) {
    if (playerChoice === cpuPick) {
        return "Tie!";
    } else if (playerChoice === "Rock") {
        return (cpuPick === "Paper") ? "You lose" : "You win";
    } else if (playerChoice === "Paper") {
        return (cpuPick === "Scissors") ? "You lose" : "You win";
    } else if (playerChoice === "Scissors") {
        return (cpuPick === "Rock") ? "You lose" : "You win";
    }
};

function checkWinner (playerScore, cpuScore) {
    if (cpuScore >= 3) {
        alert("CPU is the winner! Refresh page to restart.");
    } else if (playerScore >= 3) {
        alert("You are the winner! Refresh page to restart.");
    }
};

function game(playerChoice) {

    const choices = ["Rock", "Paper", "Scissors"];
    let playerPick = playerChoice;
    let cpuPick = choices[Math.floor(Math.random() * 3)];
    let roundResult = checkRoundWinner(playerPick, cpuPick);

    if (roundResult == "You win") {
        playerScore++;
    } else if (roundResult == "You lose") {
        cpuScore++;
    }

    score.innerHTML = playerScore + " - " + cpuScore;
    playerMove.innerHTML = "Your choice: " + playerPick;
    computerChoice.innerHTML = "CPU choice: " + cpuPick;
    result.innerHTML = "Result : " + roundResult;

    checkWinner(playerScore, cpuScore);
};

rock.addEventListener("click", () => {
    let playerChoice = "Rock";
    game(playerChoice);
});

paper.addEventListener("click", () => {
    let playerChoice = "Paper";
    game(playerChoice);
});

scissors.addEventListener("click", () => {
    let playerChoice = "Scissors";
    game(playerChoice);
});
