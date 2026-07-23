// Randomly return strings "rock", "paper", or "scissors"
function getComputerChoice() {
    // Use Math.random to return a number between 0 and 2
    const getRandomNumber = Math.floor(Math.random() * 2.99);

    // Return "rock" for 0, "paper" for 1, and "scissors" for 2
    if (getRandomNumber == 0) {
        return 'rock';
        console.log('rock')
    } else if (getRandomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Global declare of human and computer score (default 0)
let humanScore = 0;
let computerScore = 0;

// Send alert message of round result
function roundResult(pick1, pick2) {
    // If tie (same picks)
    if (pick1 === pick2) {
        // 
        alert('tie');
    } else {
        // 
        alert(pick1 + ' beats ' + pick2);
    }
}


function playRound(humanPick, computerPick) {
    console.log('polayed' + humanPick + computerPick)
    // Compare humanPick and computerPick to determine winner
    // Rock beats scissors, scissors beats paper, paper beats rock
    // Same pick is a tie, no winner
    if (humanPick == computerPick) {
        roundResult(humanPick, computerPick);
        return;
    } else if (humanPick == 'rock') {
        if (computerPick == 'scissors') {
            humanScore += 1;
            roundResult(humanPick, computerPick);
        } else {
            computerScore += 1;
            roundResult(computerPick, humanPick);
        }
    } else if (humanPick == 'paper') {
        if (computerPick == 'rock') {
            humanScore += 1;
            roundResult(humanPick, computerPick);
        } else {
            computerScore += 1;
            roundResult(computerPick, humanPick);
        }
    } else {
        if (computerPick == 'paper') {
            humanScore += 1;
            roundResult(humanPick, computerPick);
        } else {
            computerScore += 1;
            roundResult(computerPick, humanPick);
        }
    }

    // Update scores
    const humanScoreCount = document.querySelector('#human-score');
    const computerScoreCount = document.querySelector('#computer-score');

    humanScoreCount.innerHTML = humanScore;
    computerScoreCount.innerHTML = computerScore;
}

// RPS button choices
let buttonChoices = document.querySelector('#button-choices');

// Listen for which choice human player makes and send to game
buttonChoices.addEventListener('click', (event) => {
    let target = event.target;
        switch(target.id) {
            case 'rock':
                playRound('rock', getComputerChoice());
                break;
            case 'paper':
                playRound('paper', getComputerChoice());
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice());
                break;
        }
});

