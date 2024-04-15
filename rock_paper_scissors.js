const choices = ['rock','paper','scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerInput(choices){
    var playerChoice = prompt("Do you play rock/paper/scissors?") 
    playerChoice = playerChoice.toLowerCase()

    if (!choices.includes(playerChoice)) {
        alert("Sorry, please pick from: rock/paper/scissors") 
        getPlayerInput(choices)
    }
    return playerChoice
}
function playSingleRound(playerChoice, computerChoice) {
    if ((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'rock')) {
        playerScore++
        return `Player played ${playerChoice} and Computer played ${computerChoice}. Player Wins!`
    }
    else if ((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'scissors' && computerChoice == 'rock') || (playerChoice == 'paper' && computerChoice == 'scissors')) {
        computerScore++
        return `Player played ${playerChoice} and Computer played ${computerChoice}. Computer Wins!`
    } 
    else {
        return `Player played ${playerChoice} and Computer played ${computerChoice}. Tie Game!`
    }
}

function playGame() {
    while (playerScore < 5 || computerScore < 5) {
        console.log('Current Score: Player: ' + playerScore + " Computer: " + computerScore)

        computerChoice = getComputerChoice(choices)
        playerChoice = getPlayerInput(choices)


        console.log(playSingleRound(playerChoice, computerChoice)
    )
        console.log('Great Game, play again!')
    }

    if (playerScore == 5){
        console.log('Player wins! Game Over')
    }
    else if (computerScore == 5){
        console.log('Computer wins! Game Over')
    }

}

playGame()