function getComputerChoice() {
	let choices = ["ROCK", "PAPER", "SCISSORS"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	return randomChoice

}

computerSelection = getComputerChoice();

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
		(playerSelection === "PAPER" && computerSelection === "ROCK") ||
		(playerSelection === "SCISSORS" && computerSelection === "PAPER")
	) {
		playerScore += 1
		roundResult.textContent = "Player Wins"
		score.textContent = `Player ${playerScore} : ${computerScore} Computer`
	} else if (
		(computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
		(computerSelection === "PAPER" && playerSelection === "ROCK") ||
		(computerSelection === "SCISSORS" && playerSelection === "PAPER")
	) {
		computerScore += 1
		roundResult.textContent = "Computer Wins"
		score.textContent = `Player ${playerScore} : ${computerScore} Computer`
	} else if (playerSelection === computerSelection) {
		roundResult.textContent = "Draw"
		score.textContent = `Player ${playerScore} : ${computerScore} Computer`
	} else roundResult.textContent("Invalid move. Please check and try again")

	declareWinner()
}

function declareWinner() {
	if (playerScore === 5) {
		gameResult.textContent = "Player wins the game!"
	} else if (computerScore === 5) {
		gameResult.textContent = "Computer wins the game!"
	}
}

// function game() {
// 	let playerScore = 0
// 	let computerScore = 0
// 	let numberOfRounds = 5

// 	while (numberOfRounds > 0) {
// 		let currentRound = playRound()
// 		if (currentRound === "P Wins") {
// 			playerScore++
// 			console.log("You Win! " + "Score is " + playerScore + ":" + computerScore);
// 		} else if (currentRound === "C Wins") {
// 			computerScore++
// 			console.log("You Lose! " + "Score is " + playerScore + ":" + computerScore);
// 		} else if (currentRound === "Draw") {
// 			console.log("It's a Draw! " + "Score is still " + playerScore + ":" + computerScore);
// 		}

// 		numberOfRounds -= 1
// 	}
// }

const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const roundResult = document.getElementById('roundResult')
const score = document.getElementById('score')
const gameResult = document.getElementById('gameResult')

rockButton.addEventListener('click', () => handleClick('ROCK'))
paperButton.addEventListener('click', () => handleClick('PAPER'))
scissorsButton.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection) {
	const computerSelection = getComputerChoice()
	playRound(playerSelection, computerSelection)
}

