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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Input Rock, Paper, or Scissors to make your choice!"
    );
    let result = playRound(playerSelection, getComputerChoice());
    result.includes("Win")
      ? playerScore++
      : result.includes("Lose")
      ? computerScore++
      : null;
    console.log(result);
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("You reign victorious!");
  } else if (playerScore === computerScore) {
    console.log("It was a close match.");
  } else {
    console.log("You lost to a formidable opponent.");
  }
}

game();
