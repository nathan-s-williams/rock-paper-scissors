let winCount = 0;
document.querySelector('#counter').textContent = winCount;

const updateCounter = () => {
    winCount++;
    document.querySelector('#counter').textContent = winCount;
}

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
        updateCounter();   
        return `Player wins! Player chose ${playerSelection} and the computer chose ${computerSelection}`
    } else if (playerSelection == computerSelection) {
        return `It's a tie! Player chose ${playerSelection} and the computer chose ${computerSelection}`
    } else {
        return `Computer wins! Player chose ${playerSelection} and the computer chose ${computerSelection}`
    }
}

const game = (playerSelection) => {
    let checkIfWinnerMessageExists = document.querySelector('.winner-message');
    if (checkIfWinnerMessageExists != null) {
        checkIfWinnerMessageExists.parentElement.removeChild(checkIfWinnerMessageExists);
    }

    let computerSelection = getComputerChoice();
    let winnerMessage = playRound(computerSelection, playerSelection);

    let gameSection = document.querySelector('.game-section');
    let response = document.createElement('div');
    response.classList.add('winner-message');
    response.textContent = winnerMessage;

    gameSection.appendChild(response);
}

const rockButton = document.querySelector('#rock-button');
rockButton.addEventListener('click', () => {
    game('rock');
})

const paperButton = document.querySelector('#paper-button');
paperButton.addEventListener('click', () => {
    game('paper');
})

const scissorsButton = document.querySelector('#scissors-button');
scissorsButton.addEventListener('click', () => {
    game('scissors');
})