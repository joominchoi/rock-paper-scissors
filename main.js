function getComputerChoice() {
	let choices = ["ROCK", "PAPER", "SCISSORS"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	return randomChoice

}

computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
		(playerSelection === "PAPER" && computerSelection === "ROCK") ||
		(playerSelection === "SCISSORS" && computerSelection === "PAPER")
	) {
		// return "P Wins"
		console.log("P Wins")
	} else if (
		(computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
		(computerSelection === "PAPER" && playerSelection === "ROCK") ||
		(computerSelection === "SCISSORS" && playerSelection === "PAPER")
	) {
		// return "C Wins"
		console.log("C Wins")
	} else if (playerSelection === computerSelection) {
		// return "Draw"
		console.log("Draw")
	} else console.log("Invalid move. Please check input.");
}

function game() {
	let playerScore = 0
	let computerScore = 0
	let numberOfRounds = 5

	while (numberOfRounds > 0) {
		let currentRound = playRound()
		if (currentRound === "P Wins") {
			playerScore++
			console.log("You Win! " + "Score is " + playerScore + ":" + computerScore);
		} else if (currentRound === "C Wins") {
			computerScore++
			console.log("You Lose! " + "Score is " + playerScore + ":" + computerScore);
		} else if (currentRound === "Draw") {
			console.log("It's a Draw! " + "Score is still " + playerScore + ":" + computerScore);
		}

		numberOfRounds -= 1
	}
}

const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')

rockButton.addEventListener('click', () => handleClick('ROCK'))
paperButton.addEventListener('click', () => handleClick('PAPER'))
scissorsButton.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection) {
	const computerSelection = getComputerChoice()
	playRound(playerSelection, computerSelection)
  }

// game()