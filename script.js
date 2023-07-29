function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "Rock";
    } else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let titlePlayerSelection =
        lowerPlayerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (computerSelection === titlePlayerSelection) {
        return `Draw, you both picked ${computerSelection}`;
    }

    if (computerSelection === "Rock") {
        if (titlePlayerSelection === "Paper") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Rock beats Scissors";
        }
    } else if (computerSelection === "Paper") {
        if (titlePlayerSelection === "Scissors") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Paper beats Rock";
        }
    } else {
        if (titlePlayerSelection === "Rock") {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }
}

function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    const resultsDiv = document.querySelector(".results");
    let playerSelect = document.querySelectorAll("button");

    function updateScore() {
        let result = playRound(this.textContent, getComputerChoice());
        result.includes("Win")
            ? playerScore++
            : result.includes("Lose")
            ? computerScore++
            : null;
        resultsDiv.innerText += `${result}
                Player: ${playerScore} | Computer: ${computerScore}\n`;

        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                resultsDiv.innerText += `You reign victorious!
                Refresh the page to play again!`;
                playerSelect.forEach((button) =>
                    button.removeEventListener("click", updateScore)
                );

                return;
            } else {
                resultsDiv.innerText += `Computer wins! You lost to a formidable opponent.
                Refresh the page to play again!`;
                playerSelect.forEach((button) =>
                    button.removeEventListener("click", updateScore)
                );
                return;
            }
        }
    }

    playerSelect.forEach((button) =>
        button.addEventListener("click", updateScore)
    );
}

game();
