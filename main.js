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
		roundExplanation.textContent = 
		`You chose ${playerSelection} and the computer chose ${computerSelection}.
		${playerSelection} beats ${computerSelection}. You win this round!`
		roundResult.textContent = "Player wins this round!"
		score.textContent = `Player ${playerScore} : ${computerScore} Computer`
	} else if (
		(computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
		(computerSelection === "PAPER" && playerSelection === "ROCK") ||
		(computerSelection === "SCISSORS" && playerSelection === "PAPER")
	) {
		computerScore += 1
		roundExplanation.textContent = 
		`You chose ${playerSelection} and the computer chose ${computerSelection}.
		${computerSelection} beats ${playerSelection}. Computer wins this round!`
		roundResult.textContent = "Computer wins this round!"
		score.textContent = `Player ${playerScore} : ${computerScore} Computer`
	} else if (playerSelection === computerSelection) {
		roundExplanation.textContent = 
		`You and the computer both chose ${playerSelection}. This round is a draw!`
		roundResult.textContent = "This round is a draw!"
		score.textContent = `Player ${playerScore} : ${computerScore} Computer`
	} else roundResult.textContent("Invalid move. Please check and try again")

	disableButtons()
	declareWinner()
}

function declareWinner() {
	if (playerScore === 5) {
		gameResult.textContent = "Player wins the game!"
	} else if (computerScore === 5) {
		gameResult.textContent = "Computer wins the game!"
	}
}

function disableButtons() {
	if ((playerScore >= 5) || (computerScore >= 5)) {
		rockButton.disabled = true;
		paperButton.disabled = true;
		scissorsButton.disabled = true;
	}
}

const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const roundExplanation = document.getElementById('roundExplanation')
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

roundExplanation.textContent = `Round explanation will be displayed here`
roundResult.textContent = `Round results will be displayed here.`
score.textContent = `Player ${playerScore} : ${computerScore} Computer`
gameResult.textContent = `Game hasn't finished yet!`
