function getComputerChoice() {
	let choices = ["ROCK", "PAPER", "SCISSORS"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	return randomChoice

}

function playRound(playerSelection, computerSelection) {
	playerSelectionUpperCase = playerSelection.toUpperCase()

	if (playerSelectionUpperCase === "ROCK" && computerSelection === "SCISSORS") {
		return "You Win! Rock beats Scissors";
	} else if (playerSelectionUpperCase === "PAPER" && computerSelection === "ROCK") {
		return "You Win! Paper beats Rock";
	} else if (playerSelectionUpperCase === "SCISSORS" && computerSelection === "PAPER") {
		return "You Win! Scissors beats Paper";
	} else if (computerSelection === "ROCK" && playerSelectionUpperCase === "SCISSORS") {
		return "You Lose! Rock beats Scissors";
	} else if (computerSelection === "PAPER" && playerSelectionUpperCase === "ROCK") {
		return "You Lose! Paper beats Rock";
	} else if (computerSelection === "SCISSORS" && playerSelectionUpperCase === "PAPER") {
		return "You Lose! Scissors beats Paper";
	} else if (playerSelectionUpperCase === "ROCK" && computerSelection === "ROCK") {
		return "It's a Draw! You both drew Rock"
	} else if (playerSelectionUpperCase === "PAPER" && computerSelection === "PAPER") {
		return "It's a Draw! You both drew Paper"
	} else if (playerSelectionUpperCase === "SCISSORS" && computerSelection === "SCISSORS") {
		return "It's a Draw! You both drew Scissors"
	} else return "Please check input"
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));