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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const div = document.querySelector("div");
        const overMessageP = document.querySelector("#overMessage");

        if (humanChoice === computerChoice) {
            div.textContent = ("Tie! You made the same choice.")
            div.style.backgroundColor = "grey";
            return;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            div.textContent = ("You lose! Computer chose paper.");
            div.style.backgroundColor = "red";
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            div.textContent = ("You win! Computer chose scissors.");
            div.style.backgroundColor = "green";
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            div.textContent = ("You win! Computer chose rock.");
            div.style.backgroundColor = "green";
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            div.textContent = ("You lose! Computer chose scissors.");
            div.style.backgroundColor = "red";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            div.textContent = ("You lose! Computer chose rock.");
            div.style.backgroundColor = "red";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            div.textContent = ("You win! Computer chose paper.");
            div.style.backgroundColor = "green";
            humanScore++;
        }

        const scoreHumanP = document.querySelector("#scoreHuman");
        const scoreComputerP = document.querySelector("#scoreComputer");
        scoreHumanP.textContent = "Human: "+humanScore;
        scoreComputerP.textContent = "Computer: "+computerScore;

        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                overMessageP.textContent = ("You win the game! Your score was " + humanScore + " and the computer score was " + computerScore + ".");
            } else if (computerScore > humanScore) {
                overMessageP.textContent = ("You lose the game! Your score was " + humanScore + " and the computer score was " + computerScore + ".");
            } else if (computerScore === humanScore) {
                overMessageP.textContent = ("Tie! You both win and lose! Your score was " + humanScore + " and the computer score was " + computerScore + ".");
            } else {
                overMessageP.textContent = ("You broke the universe!");
            }
        }
    }

    const rockButton = document.querySelector("#rockButton");
    rockButton.addEventListener("click", function (e) {
        playRound("rock", getComputerChoice());
    });
    const paperButton = document.querySelector("#paperButton");
    paperButton.addEventListener("click", function (e) {
        playRound("paper", getComputerChoice());
    });
    const scissorsButton = document.querySelector("#scissorsButton");
    scissorsButton.addEventListener("click", function (e) {
        playRound("scissors", getComputerChoice());
    });
}

playGame();