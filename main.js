function getComputerChoice() {
	let choices = ["Rock", "Paper", "Scissors"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	return randomChoice

}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "Rock" && computerSelection === "Scissors") {
		return "You Win! Rock beats Scissors";
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return "You Win! Paper beats Rock";
	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
		return "You Win! Scissors beats Paper";
	} else if (computerSelection === "Rock" && playerSelection === "Scissors") {
		return "You Lose! Rock beats Scissors";
	} else if (computerSelection === "Paper" && playerSelection === "Rock") {
		return "You Lose! Paper beats Rock";
	} else if (computerSelection === "Scissors" && playerSelection === "Paper") {
		return "You Lose! Scissors beats Paper";
	} else if (playerSelection === "Rock" && computerSelection === "Rock") {
		return "Its a Draw! You both drew Rock!"
	} else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
		return "Its a Draw! You both drew Scissors!"
	} else if (playerSelection === "Rock" && computerSelection === "Rock") {
		return "Its a Draw! You both drew Rock!"
	} else return "Please check input"
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));