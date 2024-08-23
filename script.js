let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update the result div
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    // Check if the game has been won
    if (humanScore === 5) {
        document.getElementById("result").textContent = "Congratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById("result").textContent = "Sorry! You lose the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});
