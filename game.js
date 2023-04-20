//function to take computer choice
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random () * 3);
    switch (randomChoice){
        case 0: 
        return 'paper';
        break;
        case 1: 
        return 'rock';
        break;
        case 2: 
        return 'scissors';
        break;
    }
}

function getPlayRound(playerSelection, computerSelection){
if((playerSelection === 'rock')&&(computerSelection === 'scissors')){
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    return 'Player won!';
}else if((playerSelection === 'rock')&& (computerSelection === 'paper')){
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return 'Computer won!';
}else if((playerSelection === 'scissors')&&(computerSelection === 'paper')){
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    return 'Player won!';
}else if((playerSelection === 'scissors')&&(computerSelection === 'rock')){
    console.log(`You lose! ${playerSelection} beats ${computerSelection}`);
    return 'Computer won!';
}else if((playerSelection === 'paper')&&(computerSelection === 'rock')){
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    return 'Player won!';
}else if((playerSelection === 'paper')&&(computerSelection === 'scissors')){
   console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
   return 'Computer won!';
}else if(playerSelection === computerSelection || computerSelection === playerSelection){
    console.log("It's a tie");
    return 'tie';
}
}

function game(){
    let count = 5;
    let humanPlayer = '';
    let computerPlayer = '';
    let output = '';
    let playerScore = 0;
    let computerScore = 0;

    for(let row = 1; row<=count; row++){
     humanPlayer = prompt("Enter either rock, paper or scissors").toLowerCase();
     computerPlayer = getComputerChoice();
     output = getPlayRound(humanPlayer, computerPlayer);
     if(output === 'Player won!'){
        playerScore += 1;
        console.log(`Player point is ${playerScore}`);
     }else if(output === 'Computer won!'){
        computerScore ++;
        console.log(`Computer point is ${computerScore}`);
     }else if(output === 'tie'){
        count += 1;
        console.log('Try again');
     }
    }
    // comparing scores to detect winner
    if(playerScore > computerScore){
        console.log(`Player won! with ${playerScore} pooints`);
    }else {
        console.log(`Computer won! with ${computerScore}`);
    }

}
console.log(game());