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
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
                    computerScore++;
                } else if (computerChoice == 'scissors'){
                    console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
                }

                break;

            case 'paper':

                if(computerChoice === 'scissors'){
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
                    computerScore++;
                } else if (computerChoice == 'rock'){
                    console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
                }
                
                break;

            case 'scissors':

                if(computerChoice === 'rock'){
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
                    computerScore++;
                } else if (computerChoice == 'paper'){
                    console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
                }

                break;

            default:
                console.log('Invalid choice!');
        }
    } else {
        console.log(`DRAW! You both chose ${playerChoice}!`);
    }
}

game = () => {

    for( let i=1; i<6; i++){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        showResults(i);
    }

    showWinner();
    
}

showResults = (roundNumber) => {
    console.log(`Round ${roundNumber} out of 5.`)
    console.log(`Your score is ${playerScore} and computer's score is ${computerScore}`);
    console.log('==========');
}

showWinner = () => {
    if(playerScore > computerScore){
        console.log('CONGRATULATIONS! You WON!');
    } else {
        console.log('GAME OVER! You LOST to Computer.');
    }
    
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

game();