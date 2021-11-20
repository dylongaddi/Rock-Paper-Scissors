function computerPlay() {
        let randomChoice = Math.floor(Math.random()*3);
        if (randomChoice === 1) {
                return 'rock';
        }   else if (randomChoice === 2) {
                return 'paper';
        }   else {
                return 'scissors';
        }
    }


function playRound(playerSelection, computerSelection) {
                if (playerSelection === 'ROCK') {
                        if (computerSelection === 'paper') {
                                computerScore++;
                                return computerWin;
                        }   else if (computerSelection === 'rock') {
                                return draw;
                        }   else if (computerSelection === 'scissors') {
                                playerScore++;
                                return playerWin;
                        } else {
                                return 'Something Went Wrong';
                        }
                } 
                else if (playerSelection.toUpperCase === 'PAPER') {
                        if (computerSelection === 'rock') {
                                playerScore++;
                                return playerWin;
                        }   else if (computerSelection === 'paper') {
                                return draw;
                        }   else if (computerSelection === 'scissors') {
                                computerScore++;
                                return computerWin;
                        } else {
                        return 'Something Went Wrong';
                }
                }
                else if (playerSelection.toUpperCase === 'SCISSORS') {
                        if(computerSelection === 'rock') {
                        computerScore++;
                        return computerWin; 
                }   else if (computerSelection === 'paper') {
                        playerScore++;
                        return playerWin;
                }   else if (computerSelection === 'scissors') {
                        return draw;
                }   else {
                        return 'Something went wrong';
                }
                }
        }

let playerWin = 'You win!'
let computerWin = 'The computer wins!'
let draw= 'It is a draw!'
let computerScore = 0
let playerScore = 0


for (var i=0;i<5;i++) {
        let playerSelection = prompt('Choose Rock, Paper, or Scissors').toUpperCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player:' + playerScore);
        console.log('Computer:' + computerScore);
}

if (playerScore > computerScore) {
                console.log('Player Wins!');
        } else if (playerScore === computerScore) {
                console.log('It is a tie!');
        } else {
                console.log('Computer Wins!');
        }