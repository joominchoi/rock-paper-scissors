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
		results.textContent = "Player Wins"
	} else if (
		(computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
		(computerSelection === "PAPER" && playerSelection === "ROCK") ||
		(computerSelection === "SCISSORS" && playerSelection === "PAPER")
	) {
		results.textContent = "Computer Wins"
	} else if (playerSelection === computerSelection) {
		results.textContent = "Draw"
	} else results.textContent("Invalid move. Please check and try again")
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
const results = document.getElementById('results')

rockButton.addEventListener('click', () => handleClick('ROCK'))
paperButton.addEventListener('click', () => handleClick('PAPER'))
scissorsButton.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection) {
	const computerSelection = getComputerChoice()
	playRound(playerSelection, computerSelection)
  }

// game()