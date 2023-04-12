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
            return ("you win " + playerSelection + " beats " + computerSelection);
        }
        else if (playerSelection == "paper" && computerSelection == "rock"){
            return ("you win " + playerSelection + " beats " + computerSelection);
        }
        else if (playerSelection == "scissors" && computerSelection == "paper"){
            return ("you win "+ playerSelection + " beats " + computerSelection);
        }
        else if (playerSelection == computerSelection){
            return ("its a draw");
        }
        else {
            return ("computer wins " + computerSelection + " beats " + playerSelection);
        }
    }
   
  }
   
  function game() {
    
    for(let i=0; i<5; i++){
       playRound(i);
       
    }
  }

  const playerSelection = prompt("rock, paper, scissors?").toLowerCase(); 
  const computerSelection = getComputerChoice();
 
  console.log(playRound(playerSelection, computerSelection));
  
  