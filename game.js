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
}
}
