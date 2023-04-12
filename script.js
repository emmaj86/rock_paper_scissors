function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';    
        };
}
// var getPlayerChoice = prompt("rock, paper, scissors?");
  


function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == "rock" || "paper" || "scissors" ){
        if (playerSelection == "rock" && computerSelection == "scissors"){
            console.log ("you win " + playerSelection + " beats " + computerSelection);
        }
        else if (playerSelection == "paper" && computerSelection == "rock"){
            console.log ("you win " + playerSelection + " beats " + computerSelection);
        }
        else if (playerSelection == "scissors" && computerSelection == "paper"){
            console.log ("you win "+ playerSelection + " beats " + computerSelection);
        }
        else if (playerSelection == computerSelection){
            console.log ("its a draw");
        }
        else {
            console.log ("computer wins " + computerSelection + " beats " + playerSelection);
        }
    }
   
  }
   
  const playerSelection = prompt("rock, paper, scissors?"); 
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));