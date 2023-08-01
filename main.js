function getComputerChoice() {
	let choices = ["ROCK", "PAPER", "SCISSORS"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	return randomChoice

}

function playRound(playerSelection, computerSelection) {


	playerSelection = prompt("Rock, Paper or Scissors?");
	playerSelectionUpperCase = playerSelection.toUpperCase()

	computerSelection = getComputerChoice();

	if (playerSelectionUpperCase === "ROCK" && computerSelection === "SCISSORS") {
		return "P Wins"
	} else if (playerSelectionUpperCase === "PAPER" && computerSelection === "ROCK") {
		return "P Wins"
	} else if (playerSelectionUpperCase === "SCISSORS" && computerSelection === "PAPER") {
		return "P Wins"
	} else if (computerSelection === "ROCK" && playerSelectionUpperCase === "SCISSORS") {
		return "C Wins"
	} else if (computerSelection === "PAPER" && playerSelectionUpperCase === "ROCK") {
		return "C Wins"
	} else if (computerSelection === "SCISSORS" && playerSelectionUpperCase === "PAPER") {
		return "C Wins"
	} else if (playerSelectionUpperCase === "ROCK" && computerSelection === "ROCK") {
		return "Draw"
	} else if (playerSelectionUpperCase === "PAPER" && computerSelection === "PAPER") {
		return "Draw"
	} else if (playerSelectionUpperCase === "SCISSORS" && computerSelection === "SCISSORS") {
		return "Draw"
	} else console.log("Invalid move. Please check input.");
}

// console.log(playRound());

function game() {
	let playerScore = 0
	let computerScore = 0

	// playRound();
	// if (playRound.playerWins === true) {
	// 	playerScore++
	// 	console.log("You Win! " + playRound.playerSelectionUpperCase + "beats " + playRound.computerSelection + ". Score is " + playerScore + ":" + computerScore);
	// } else if (playRound.computerWins === true) {
	// 	computerScore++
	// 	console.log("You Lose! " + playRound.computerSelection + "beats " + playRound.playerSelectionUpperCase + ". Score is " + playerScore + ":" + computerScore);
	// } else if (playRound.draw === true) {
	// 	console.log("It's a Draw! You both drew " + playerSelectionUpperCase + ". Score is still " + playerScore + ":" + computerScore);
	// }

	let round1 = playRound()
	if (round1 === "P Wins") {
		playerScore++
		console.log("You Win! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round1 === "C Wins") {
		computerScore++
		console.log("You Lose! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round1 === "Draw") {
		console.log("It's a Draw! " + "Score is still " + playerScore + ":" + computerScore);
	}

	let round2 = playRound()
	if (round2 === "P Wins") {
		playerScore++
		console.log("You Win! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round2 === "C Wins") {
		computerScore++
		console.log("You Lose! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round2 === "Draw") {
		console.log("It's a Draw! " + "Score is still " + playerScore + ":" + computerScore);
	}

	let round3 = playRound()
	if (round3 === "P Wins") {
		playerScore++
		console.log("You Win! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round3 === "C Wins") {
		computerScore++
		console.log("You Lose! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round3 === "Draw") {
		console.log("It's a Draw! " + "Score is still " + playerScore + ":" + computerScore);
	}

	let round4 = playRound()
	if (round4 === "P Wins") {
		playerScore++
		console.log("You Win! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round4 === "C Wins") {
		computerScore++
		console.log("You Lose! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round4 === "Draw") {
		console.log("It's a Draw! " + "Score is still " + playerScore + ":" + computerScore);
	}

	let round5 = playRound()
	if (round5 === "P Wins") {
		playerScore++
		console.log("You Win! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round1 === "C Wins") {
		computerScore++
		console.log("You Lose! " + "Score is " + playerScore + ":" + computerScore);
	} else if (round5 === "Draw") {
		console.log("It's a Draw! " + "Score is still " + playerScore + ":" + computerScore);
	}
}

game()