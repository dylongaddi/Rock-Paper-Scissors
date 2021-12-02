function playRound(playerSelection, computerSelection) {
                if (playerSelection === 'Rock') {
                        if (computerSelection === 'Paper') {
                                computerScore++;
                                roundResult = computerWin;
                        }   else if (computerSelection === 'Rock') {
                                roundResult = draw;
                        }   else if (computerSelection === 'Scissors') {
                                playerScore++;
                                roundResult = playerWin;
                        } else {
                                return 'Something Went Wrong';
                        }
                } 
                else if (playerSelection === 'Paper') {
                        if (computerSelection === 'Rock') {
                                playerScore++;
                                roundResult = playerWin;
                        }   else if (computerSelection === 'Paper') {
                                roundResult = draw;
                        }   else if (computerSelection === 'Scissors') {
                                computerScore++;
                                roundResult = computerWin;
                        } else {
                        return 'Something Went Wrong';
                }
                }
                else if (playerSelection === 'Scissors') {
                        if(computerSelection === 'Rock') {
                        computerScore++;
                        return computerWin; 
                }   else if (computerSelection === 'Paper') {
                        playerScore++;
                        return playerWin;
                }   else if (computerSelection === 'Scissors') {
                        return draw;
                }   else {
                        return 'Something went wrong';
                }
                }
        }

let playerWin = 'You win!'
let computerWin = 'The computer wins!'
let draw= 'It is a draw!'
let roundResult = ''
let computerScore = 0
let playerScore = 0

const selections = document.querySelectorAll('.selections');
selections.forEach((selection) => {
        selection.addEventListener('click', function () {
        const playerSelection= this.textContent;

        const computerOptions = ["Rock", "Paper", "Scissors"]
        const computerSelection = computerOptions[Math.floor(Math.random()*3)];

        playRound(playerSelection, computerSelection);
        updateScore();
        checkWinner();
        });
});



function updateScore() {
        document.getElementById('pScore').textContent = playerScore;
        document.getElementById('cScore').textContent = computerScore;
        document.getElementById('roundResult').textContent = roundResult;
}



//UI below is a WIP

function openWinnerModal () {

}

function closeWinnerModal () {

}

function setModalMessage () {
        return playerScore > computerScore
        ? (winnerMessage.textContent = 'You win the series this time!')
        : (winnerMessage.textContent = 'The computer wins this time!')
}

function restartGame () {
        playerScore = 0
        computerScore = 0
        document.getElementById('roundResult').textContent = 'Choose your weapon!'
}

function checkWinner () {
        
        if (playerScore === 5 || computerScore === 5) {
                restartGame();
                return playerScore > computerScore
                ? (document.getElementById('roundResult').textContent = "You win the series this time!") 
                : (document.getElementById('roundResult').textContent = "The computer wins the series this time!")
        }
}