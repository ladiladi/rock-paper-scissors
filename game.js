function computerPlay(handGestures) {
    var computerAnswer = Math.floor(Math.random() * handGestures);
    switch(computerAnswer) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}
function playRPS(playerSelection, computerSelection) {
    var standardizedAnswer = playerSelection.toLowerCase();
    var gameResult;
    switch(standardizedAnswer) {
        case "rock":
            if(computerSelection = "rock") {
                return gameResult = "It's a tie!";
            }
            else if(computerSelection = "paper") {
                computerScore++;
                return gameResult = "You lose! Paper beats Rock!";
            }
            else {
                playerScore++;
                return gameResult = "You win! Rock beats Scissors!";
            }
        case "paper":
            if(computerSelection = "paper") {
                return gameResult = "It's a tie!";
            }
            else if(computerSelection = "scissors") {
                computerScore++;
                return gameResult = "You lose! Scissors beat Paper!";
            }
            else {
                playerScore++;
                return gameResult = "You win! Paper beats Rock!";
            }
        case "scissors":
            if(computerSelection = "scissors") {
                return gameResult = "It's a tie!";
            }
            else if(computerSelection = "rock") {
                computerScore++;
                return gameResult = "You lose! Rock beats Scissors!";              
            }
            else {
                playerScore++;
                return gameResult = "You win! Scissors beat Rock!";
            }   
    }
}

var playerScore = 0;
var computerScore = 0;

function game() {
    while(playerScore < 5 || computerScore < 5) {
        var computerSelection = computerPlay(3);
        var playerSelection = window.prompt("Type Rock, Paper or Scissors");
        var roundResult = (playRPS(playerSelection, computerSelection));
        console.log(roundResult);
    }
    if (playerScore = 5) {
        console.log("You win the game!");
    }
    else if (computerScore = 5) {
        console.log("You lost the game!");
    }
}