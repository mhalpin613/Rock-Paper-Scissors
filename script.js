let playerScore = 0;
let cpuScore = 0;

// getting DOM elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("score");
const playerMove = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

// determines if the player won, lost, or tied the round
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

// checks if a player has reached a winning score and prompts user for restart
function checkWinner (playerScore, cpuScore) {
    if (cpuScore >= 3) {
        alert("CPU is the winner! Refresh the page to restart.");
    } else if (playerScore >= 3) {
        alert("You are the winner! Refresh the page to restart.");
    }
};

// starts a round of the game
function game(playerChoice) {

    // gets the player and cpu choice and checks for the result
    const choices = ["Rock", "Paper", "Scissors"];
    let playerPick = playerChoice;
    let cpuPick = choices[Math.floor(Math.random() * 3)];
    let roundResult = checkRoundWinner(playerPick, cpuPick);

    // updates the score if there is no tie
    if (roundResult == "You win") {
        playerScore++;
    } else if (roundResult == "You lose") {
        cpuScore++;
    }

    // updates html
    score.innerHTML = playerScore + " - " + cpuScore;
    playerMove.innerHTML = "Your choice: " + playerPick;
    computerChoice.innerHTML = "CPU choice: " + cpuPick;
    result.innerHTML = "Result : " + roundResult;

    // check if the game should be ended
    checkWinner(playerScore, cpuScore);
};

// adds event listeners for the three options and starts the round with choice
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
