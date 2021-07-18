let options = ["rock", "scissors", "paper"];
let computerScore = 0;
let playerScore = 0;
let scoreBoard = document.querySelector("#scoreboard");
let result;
let computerMove = document.querySelector("#computerMove");
const variants = document.querySelectorAll("img");
let playerChoice = "";
variants.forEach((variant) => {
    variant.addEventListener("click", () => {
        playerChoice = variant.id;
        onGame(playerChoice, computerChoice());
    })
})
console.log(playerChoice);

function onGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        computerMove.style.display = "block";
        computerMove.innerHTML = `Computer chose: ${computerSelection}`;
        result = `Computer score: ${computerScore} Your score: ${playerScore}`
        return scoreBoard.innerHTML = result;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore = playerScore + 1;
        computerMove.style.display = "block";
        computerMove.innerHTML = `Computer chose: ${computerSelection}`;
        result = `Computer score: ${computerScore} Your score: ${playerScore}`
        return scoreBoard.innerHTML = result;

    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore = computerScore + 1;
        computerMove.style.display = "block";
        computerMove.innerHTML = `Computer chose: ${computerSelection}`;
        result = `Computer score: ${computerScore} Your score: ${playerScore}`
        return scoreBoard.innerHTML = result;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore = computerScore + 1;
        computerMove.style.display = "block";
        computerMove.innerHTML = `Computer chose: ${computerSelection}`;
        result = `Computer score: ${computerScore} Your score: ${playerScore}`;
        return scoreBoard.innerHTML = result;

    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore = playerScore + 1;
        computerMove.style.display = "block";
        computerMove.innerHTML = `Computer chose: ${computerSelection}`;
        result = `Computer score: ${computerScore} Your score: ${playerScore}`;
        return scoreBoard.innerHTML = result;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore = playerScore + 1;
        computerMove.style.display = "block";
        computerMove.innerHTML = `Computer chose: ${computerSelection}`;
        result = `Computer score: ${computerScore} Your score: ${playerScore}`;
        return scoreBoard.innerHTML = result;

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore = computerScore + 1;
        computerMove.style.display = "block";
        computerMove.innerHTML = `Computer chose: ${computerSelection}`;
        result = `Computer score: ${computerScore} Your score: ${playerScore}`;
        return scoreBoard.innerHTML = result;
    }
}

function computerChoice() {
    let randomMove = options[Math.floor(Math.random() * options.length)];
    return randomMove;
}