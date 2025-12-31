function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("rock, paper, or scissors?");
    return humanChoice.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie! You made the same choice.")
            return;
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beat Paper");
            humanScore++;
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore){
        console.log("You win the game! Your score was "+humanScore+" and the computer score was "+computerScore+".");
    } else if(computerScore > humanScore){
        console.log("You lose the game! Your score was "+humanScore+" and the computer score was "+computerScore+".");
    } else if (computerScore === humanScore) {
        console.log("Tie! You both win and lose! Your score was "+humanScore+" and the computer score was "+computerScore+".");
    } else {
        console.log("You broke the universe!");
    }
}

playGame();