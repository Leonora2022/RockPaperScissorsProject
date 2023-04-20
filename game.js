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

