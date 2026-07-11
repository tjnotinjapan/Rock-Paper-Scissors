// Randomly return strings "rock", "paper", or "scissors"
function getComputerChoice() {
    // Use Math.random to return a number between 0 and 2
    const getRandomNumber = Math.floor(Math.random() * 2.99);

    // Return "rock" for 0, "paper" for 1, and "scissors" for 2
    if (getRandomNumber == 0) {
        return 'rock';
    } else if (getRandomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    // User prompt to get user choice
    return prompt("Rock, Paper, or Scissors? ");
}

// Global declare of human and computer score (default 0)
let humanScore = 0;
let computerScore = 0;

// Send alert message of round result
function roundResult(pick1, pick2) {
    alert(pick1 + ' beats ' + pick2);
}


// Play 5 rounds of RPS
function playGame() {

    // User will play five round of RPS
    // Each round, the human or computer score increases depending on results

    for (i = 0; i < 5; i ++) {

        function playRound(humanPick, computerPick) {
            // Compare humanPick and computerPick to determine winner
            // Rock beats scissors, scissors beats paper, paper beats rock
            // Same pick is a tie, no winner
            if (humanPick == computerPick) {
                alert('Tie!');
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
        }

        // Get choices from human and computer
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
            
        // Play a round
        playRound(humanChoice, computerChoice);
    }

    // Display winner at end of game using alert
        // Compare human and computer scores
    if (humanScore > computerScore) {
        alert('Human wins! ' + humanScore + ' to ' + computerScore);
        console.log("Human wins!");
    } else if (humanScore < computerScore) {
        alert('Computer wins! ' + computerScore + ' to ' + humanScore);
        console.log("Computer wins!");
    } else {
        alert("It's a tie!");
        console.log("Nobody wins.");
    }
}

playGame();


