// access elements from the DOM
let buttons = document.querySelectorAll('.button');
let verifyHumanPlayer = document.querySelector('[data-display-human]');
let verifyComputerPlayer = document.querySelector('[data-display-computer]');
let humanScore = document.querySelector('[data-human-score]');
let computerScore = document.querySelector('[data-computer-score]');
let finalWinner = document.querySelector('[data-final-winner]');
let notice = document.querySelector('[data-notice]');
let headerTitle = document.querySelector('#title');

//variable declaration
let humanPlayer;
let computerPlayer;
  

//event-handler
function playGame(e) {
    notice.classList.add('hide');
    headerTitle.style.color = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
    humanPlayer = e.currentTarget.id;
    computerPlayer = getComputerChoice();
     playRround(humanPlayer, computerPlayer);
}

const gameChoices = ['rock', 'paper', 'scissors'];
//function for random choice from computer player
function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomIndex];
}

//container to hold score
let hScore = 0;
let cScore = 0;

//function to compare players
function playRround(human, computer) {
    if (human === computer) {
        verifyHumanPlayer.textContent = humanPlayer;
        verifyComputerPlayer.textContent = computerPlayer;
    }
    if (human === 'rock' && computer === 'scissors') {
        verifyHumanPlayer.textContent = humanPlayer + ' 🏆 ';
        verifyComputerPlayer.textContent = computerPlayer;
        humanScore.textContent = hScore += 1;
    }
    if ( human === 'paper' && computer === 'rock') {
        verifyHumanPlayer.textContent = humanPlayer + ' 🏆 ';
        verifyComputerPlayer.textContent = computerPlayer;
        humanScore.textContent = hScore += 1;
    }
    if (human === 'scissors' && computer === 'paper') {
        verifyHumanPlayer.textContent = humanPlayer + ' 🏆 ';
        verifyComputerPlayer.textContent = computerPlayer;
        humanScore.textContent = hScore += 1;
    }
    if (human === 'scissors' && computer === 'rock') {
        verifyHumanPlayer.textContent = humanPlayer ;
        verifyComputerPlayer.textContent = ' 🏆 ' + computerPlayer;
        computerScore.textContent = cScore += 1;
    }
    if (human === 'rock' && computer === 'paper') {
        verifyHumanPlayer.textContent = humanPlayer ;
        verifyComputerPlayer.textContent = ' 🏆 ' + computerPlayer;
        computerScore.textContent = cScore += 1;
    }
    if (human === 'paper' && computer === 'scissors') {
        verifyHumanPlayer.textContent = humanPlayer ;
        verifyComputerPlayer.textContent = ' 🏆 ' + computerPlayer;
        computerScore.textContent = cScore += 1;
    }
       //check for winner 
    if(hScore === 5 || cScore === 5) {
        if (hScore > cScore){
            finalWinner.textContent = `🏆 Human Player won!💥`;   
        } else finalWinner.textContent = `🏆 Computer Player won!💥`;
        headerTitle.style.color = '';
        notice.classList.remove('hide');
        verifyHumanPlayer.style.visibility = 'hidden';
        verifyComputerPlayer.style.visibility = 'hidden';
        //remove event handler once winner is found
        for (let button of Array.from(buttons)) {
            button.removeEventListener('click', playGame);
        }
        //reload page in 1s after playing game
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

//random color function for game title
function randomColor(number) {
    return Math.floor(Math.random() * number);
}

//attach event listner to all buttons
for (let button of Array.from(buttons)) {
    button.addEventListener('click', playGame);
}
