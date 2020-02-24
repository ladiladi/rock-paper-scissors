var playerScore = 0;
var computerScore = 0;
var computerChoices = ['rock', 'paper', 'scissors'];
var playerSelection = "";
var gameOver = false;

var playerScoreText = document.createElement('div');
var computerScoreText = document.createElement('div');
var resultsText = document.createElement('div');
var scoreBoardText = document.createElement('div');
var gameOverText = document.createElement('h2');

function game() {
    if (!gameOver) {
        startRound();
    }
    if (playerScore = 5) {
        gameOver = true;
        gameOverText.textContent = "You win! \nYou:${playerScore} | Computer:${computerScore}";
    }
    else if (computerScore = 5) {
        gameOver = true;
        gameOverText.textContent = "You lose! \nYou:${playerScore} | Computer:${computerScore}";
    }
}
function computerPlay() {
    return computerChoices = [Math.floor(Math.random() * computerChoices.length)];
}
function startRound() {
    var computerSelection = computerPlay();
    var playerSelection = window.prompt("Type Rock, Paper or Scissors");
    var standardizedAnswer = playerSelection.toLowerCase(); //case sensitivity

    playRound(standardizedAnswer, computerSelection);
}
function playRound(standardizedAnswer, computerSelection) {
    switch(standardizedAnswer) {
        case "rock":
            if(computerSelection = "rock") {
                resultsText.textContent = "It's a tie!";
                getScoreBoard();
            }
            else if(computerSelection = "paper") {
                computerScore++;
                resultsText.textContent = "You lose! Paper beats Rock!";
                getScoreBoard();
            }
            else {
                playerScore++;
                resultsText.textContent = "You win! Rock beats Scissors!";
                getScoreBoard();
            }
        case "paper":
            if(computerSelection = "paper") {
                resultsText.textContent = "It's a tie!";
                getScoreBoard();
            }
            else if(computerSelection = "scissors") {
                computerScore++;
                resultsText.textContent = "You lose! Scissors beat Paper!";
                getScoreBoard();
            }
            else {
                playerScore++;
                resultsText.textContent = "You win! Paper beats Rock!";
                getScoreBoard();
            }
        case "scissors":
            if(computerSelection = "scissors") {
                resultsText.textContent = "It's a tie!";
                getScoreBoard();
            }
            else if(computerSelection = "rock") {
                computerScore++;
                resultsText.textContent = "You lose! Rock beats Scissors!";     
                getScoreBoard();         
            }
            else {
                playerScore++;
                resultsText.textContent = "You win! Scissors beat Rock!";
                getScoreBoard();
            }   
    }
}
function getScoreBoard() {
    return scoreBoardText.textContent = "You:${playerScore} | Computer:${computerScore}";
}
