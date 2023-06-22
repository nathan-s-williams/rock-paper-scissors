const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playRound = (computerSelection, playerSelection) => {
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        return `Player wins! Player chose ${playerSelection} and the computer chose ${computerSelection}`
    } else if (playerSelection == computerSelection) {
        return `It's a tie! Player chose ${playerSelection} and the computer chose ${computerSelection}`
    } else {
        return `Computer wins! Player chose ${playerSelection} and the computer chose ${computerSelection}`
    }
}

const game = () => {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter choice").toLowerCase();
    console.log(playRound(computerSelection, playerSelection));
}