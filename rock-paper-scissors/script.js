let humanScore = 0;
let computerScore = 0;

let counter = 0;

let humanScoreUI = document.querySelector(".human-points span");
let computerScoreUI = document.querySelector(".computer-points span");
let pedestal = document.querySelector(".pedestal p");

let userChoiceUI = document.querySelector(".human-choice span");
let computerChoiceUI = document.querySelector(".computer-choice span");

let playAgainButton = document.querySelector(".pedestal .play-again");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        pedestal.textContent = "Nice you got a point!"
        humanScoreUI.textContent = humanScore;
    }

    else if (userChoice != computerChoice) {
        computerScore++
        pedestal.textContent = "Uff, computer got a point!"
        computerScoreUI.textContent = computerScore;
    }

    console.log("Human points: ", humanScore, "Computer points: ", computerScore)
}

function setupGame() {

    let buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {

            let userChoice = event.target.className;
            let computerChoice = getComputerChoice();

            userChoiceUI.textContent = userChoice;
            computerChoiceUI.textContent = computerChoice;
            playRound(userChoice, computerChoice);

            counter++

            if (counter >= 5) {

                buttons.forEach(b => b.disabled = true);
                playAgainButton.classList = "active";

                if (humanScore > computerScore) {
                    pedestal.textContent = "HEY YOU WON!!! CONGRATS";
                    return;
                }
                else if (humanScore < computerScore) {

                    pedestal.textContent = "Unfortunately Mr. Computer won.";
                    return;
                }
                else {

                    pedestal.textContent = "What a game, a TIE at last.";
                    return;
                }



            }



        })
    })

}

playAgainButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    counter = 0;

    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore;
    userChoiceUI.textContent = "nothing";
    computerChoiceUI.textContent = "nothing";

    pedestal.textContent = "Let's play again!";

    playAgainButton.classList.remove("active")

    document.querySelectorAll(".buttons button").forEach(b => b.disabled = false);
})

setupGame()


