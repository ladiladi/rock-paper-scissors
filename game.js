var playerScore = 0;
var computerScore = 0;
var computerChoices = ['rock', 'paper', 'scissors'];
var playerSelection = "";
var gameOver = false;
const buttons = document.querySelectorAll('button');

const container = document.querySelector('#text');
const content = document.createElement('div');

var playerScoreText = document.createElement('div');
var computerScoreText = document.createElement('div');
var resultsText = document.createElement('div');
var scoreBoardText = document.createElement('div');
var gameOverText = document.createElement('h2');
const gameOverContainer = document.querySelector("#game_over_text");
gameOverText.classList.add('gameOver');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      playerSelection = button.id;
  
      if (!gameOver) {
        startRound();
      }
    });
});

function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function startRound() {
    var computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);

    if (playerScore === 5) {
        gameOver = true;
        container.removeChild(content);
        gameOverText.textContent = "You win!\nYou: " + playerScore + " | Computer: " + computerScore;
    }
    else if (computerScore === 5) {
        gameOver = true;
        container.removeChild(content);
        gameOverText.textContent = "You lose!\nYou: " + playerScore + " | Computer: " + computerScore;
    }
    gameOverContainer.appendChild(gameOverText);
}

function playRound(playerSelection, computerSelection) {
    playerScoreText.textContent = `You: ${playerSelection}`;
    computerScoreText.textContent = `Computer: ${computerSelection}`;
       
    if (computerSelection === 'rock') {

        if (playerSelection === 'paper') {
          resultsText.textContent = 'You Win!';
          playerScore++;
          getScoreBoard();
        } else if (playerSelection === 'scissors') {
          resultsText.textContent = `You Lose!`;
          computerScore++;
          getScoreBoard();
        } else if (playerSelection === computerSelection) {
          resultsText.textContent = `It's a Tie!`;
          getScoreBoard();
        } else {
          alert('Please Refresh and Enter a Valid Choice');
        }
    
      } else if (computerSelection === 'paper') {
    
        if (playerSelection === 'scissors') {
          resultsText.textContent = 'You Win!';
          playerScore++;
          getScoreBoard();
        } else if (playerSelection === 'rock') {
          resultsText.textContent = `You Lose!`;
          computerScore++;
          getScoreBoard();
        } else if (playerSelection === computerSelection) {
          resultsText.textContent = `It's a Tie!`;
          getScoreBoard();
        } else {
          alert('Please Refresh and Enter a Valid Choice');
        }
    
      } else if (computerSelection === 'scissors') {
    
        if (playerSelection === 'rock') {
          resultsText.textContent = 'You Win!';
          playerScore++;
          getScoreBoard();
        } else if (playerSelection === 'paper') {
          resultsText.textContent = `You Lose!`;
          computerScore++;
          getScoreBoard();
        } else if (playerSelection === computerSelection) {
          resultsText.textContent = `It's a Tie!`;
          getScoreBoard();
        } else {
          alert('Please Refresh and Enter a Valid Choice');
        }
    
      } else {
        console.error("Something Went Wrong. Computer did not select Rock, Paper, or Scissors...");
      }
    
    content.appendChild(playerScoreText);
    content.appendChild(computerScoreText);
    content.appendChild(resultsText);
    content.appendChild(scoreBoardText);
    container.appendChild(content);
}
// Displays the current game state.
function getScoreBoard() {
    return scoreBoardText.textContent = 'You: ' + playerScore + ' | Computer: ' + computerScore;
}
