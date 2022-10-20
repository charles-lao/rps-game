getComputerChoice = () => {
    let roll = Math.floor(Math.random() * 3 + 1);
    let choice;
    
    switch(roll) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
        default:
            break;
    }

    return choice;
}

getPlayerChoice = () => {
    let choice = prompt('Please type rock, paper, or scissors as your move.', '');

    choice = choice.toLowerCase();

    /*
    do{
        console.log(choice);
        choice = prompt('Invalid input. Please choose rock, paper, and scissors only.', '');
    }
    while(choice != 'rock' || choice != 'paper' || choice != 'scissors');
    */

    return choice;
}

playRound = (playerChoice, computerChoice) => {
    console.log('You chose ' + playerChoice + ' and computer chose ' + computerChoice + '.');

    if(playerChoice !== computerChoice){

        switch(playerChoice){
            case 'rock':

                if(computerChoice === 'paper'){
                    messageContainer.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
                    computerScore++;
                } else if (computerChoice == 'scissors'){
                    console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
                    messageContainer.textContent = `You Won! ${playerChoice} beats ${computerChoice}`;
                    playerScore++;
                }

                break;

            case 'paper':

                if(computerChoice === 'scissors'){
                    messageContainer.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
                    computerScore++;
                } else if (computerChoice == 'rock'){
                    messageContainer.textContent = `You Won! ${playerChoice} beats ${computerChoice}`;
                    playerScore++;
                }
                
                break;

            case 'scissors':

                if(computerChoice === 'rock'){
                    messageContainer.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
                    computerScore++;
                } else if (computerChoice == 'paper'){
                    messageContainer.textContent = `You Won! ${playerChoice} beats ${computerChoice}`;
                    playerScore++;
                }

                break;

            default:
                messageContainer.textContent = 'Invalid choice!';
        }
    } else {
        messageContainer.textContent = `DRAW! You both chose ${playerChoice}!`;
    }
}

showScore = () => {
    scoreContainer.textContent = `PLAYER = ${playerScore} | COMPUTER = ${computerScore}`;
    if(playerScore === 5 || computerScore == 5){
        showWinner();
    }
}

showWinner = () => {
    if(playerScore > computerScore){
        scoreContainer.textContent = 'CONGRATULATIONS! You WON!';
    } else {
        scoreContainer.textContent ='GAME OVER! You LOST to Computer.';
    }
    playerScore = 0;
    computerScore = 0;
    
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;



//create event listeners for every game button
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        playRound(e.originalTarget.id, getComputerChoice());
        showScore();
    });
});

const messageContainer = document.querySelector('#message-container');
const scoreContainer = document.querySelector('#score-container');


    

