function computerPlay(handGestures) {
    var computerAnswer = Math.floor(Math.random() * Math.floor(handGestures));
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
    var standardizeAnswer = playerSelection.toLowerCase();
    var result;
    switch(standardizeAnswer) {
        case "rock":
            if(computerSelection = "rock") {
                return result = "It's a tie!";
            }
            else if(computerSelection = "paper") {
                computerScore++;
                return result = "You lose! Paper beats Rock!";
            }
            else {
                playerScore++;
                return result = "You win! Rock beats Scissors!";
            }
        case "paper":
            if(computerSelection = "paper") {
                return result = "It's a tie!";
            }
            else if(computerSelection = "scissors") {
                computerScore++;
                return result = "You lose! Scissors beat Paper!";
            }
            else {
                playerScore++;
                return result = "You win! Paper beats Rock!";
            }
        case "scissors":
            if(computerSelection = "scissors") {
                return result = "It's a tie!";
            }
            else if(computerSelection = "rock") {
                computerScore++;
                return result = "You lose! Rock beats Scissors!";              
            }
            else {
                playerScore++;
                return result = "You win! Scissors beat Rock!";
            }   
    }
}

const playerSelection = "rock";
const computerSelection = computerPLay();
console.log(playRPS(playerSelection, computerSelection));