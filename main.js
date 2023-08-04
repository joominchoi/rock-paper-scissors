function getComputerChoice() {
	let choices = ["ROCK", "PAPER", "SCISSORS"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	return randomChoice

}

function playRound(playerSelection, computerSelection) {
	playerSelection = prompt("Rock, Paper or Scissors?");
	playerSelectionUpperCase = playerSelection.toUpperCase()
	computerSelection = getComputerChoice();

	if (
		(playerSelectionUpperCase === "ROCK" && computerSelection === "SCISSORS") ||
		(playerSelectionUpperCase === "PAPER" && computerSelection === "ROCK") ||
		(playerSelectionUpperCase === "SCISSORS" && computerSelection === "PAPER")
	) {
		return "P Wins"
	} else if (
		(computerSelection === "ROCK" && playerSelectionUpperCase === "SCISSORS") ||
		(computerSelection === "PAPER" && playerSelectionUpperCase === "ROCK") ||
		(computerSelection === "SCISSORS" && playerSelectionUpperCase === "PAPER")
	) {
		return "C Wins"
	} else if (playerSelectionUpperCase === computerSelection) {
		return "Draw"
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

game()