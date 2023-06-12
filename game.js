const gameChoices = ['rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll('button[class="button"]');
let verifyHumanPlayer = document.querySelector('[data-display-human]');
let verifyComputerPlayer = document.querySelector('[data-display-computer]');
let humanScore = document.querySelector('[data-human-score]');
let computerScore = document.querySelector('[data-computer-score]');
let finalWinner = document.querySelector('[data-final-winner]');
let notice = document.querySelector('[data-notice]');
let headerTitle = document.querySelector('h1[id="title"]');


let clickChoice;
let humanPlayer;
let computerPlayer;
let winner;  

for (let button of Array.from(buttons)) {
    button.addEventListener('mousedown', playGame);
    button.addEventListener('mouseup', displayPlayers);
}

function playGame(e) {
    notice.classList.add('hide');
    headerTitle.style.color = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
    clickChoice = e.currentTarget.id;
    humanPlayer = gameChoices.find(gameChoice => gameChoice === clickChoice);
    computerPlayer = getComputerChoice();
    winner = playGround(humanPlayer, computerPlayer);
    
}

function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomIndex];
}

function playGround(human, computer) {
    if (human === computer) {
        return 'Draw';
    }
    if (human === 'rock' && computer === 'scissors') {
        return 'Human Player';
    }
    if ( human === 'paper' && computer === 'rock') {
        return 'Human Player';
    }
    if (human === 'scissors' && computer === 'paper') {
        return 'Human Player';
    }
    if (human === 'scissors' && computer === 'rock') {
        return 'Computer Player';
    }
    if (human === 'rock' && computer === 'paper') {
        return 'Computer Player';
    }
    if (human === 'paper' && computer === 'scissors') {
        return 'Computer Player';
    }
}

function displayPlayers(e) {
    var count = 5;
    verifyHumanPlayer.textContent = humanPlayer;
    verifyHumanPlayer.style.visibility = 'visible';
    verifyComputerPlayer.textContent = computerPlayer;
    verifyComputerPlayer.style.visibility = 'visible';
    if (winner === 'Human Player') {
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }
    if (winner === 'Computer Player') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
   
   if (humanScore.textContent == count && computerScore.textContent < count) {
    finalWinner.textContent = `🏆 Human Player won!💥`; 
   }

   if (computerScore.textContent == count && humanScore.textContent < count){
    finalWinner.textContent = `🏆 Computer Player won!💥`;
   }

   if (humanScore.textContent == count && computerScore.textContent == count) {
    finalWinner.textContent = `🤭 It\'s a Draw!`;
   }
  
   setTimeout(()=>{
   if (finalWinner.textContent == `🏆 Human Player won!💥` ||`🏆 Computer Player won!💥`|| `🤭 It\'s a Draw!`) {
    headerTitle.style.color = '';
    verifyHumanPlayer.style.visibility = 'hidden';
    verifyComputerPlayer.style.visibility = 'hidden';
    humanScore.textContent = '0';
    computerScore.textContent = '0';
    finalWinner.textContent = '';
    notice.classList.remove('hide')
   }
     }, 10000);
}

function randomColor(number) {
    return Math.floor(Math.random() * number);
}
