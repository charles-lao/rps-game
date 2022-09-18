

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

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();



playRound = (playerChoice, computerChoice) => {
    console.log('You chose ' + playerChoice + ' and computer chose ' + computerChoice + '.');

    if(playerChoice !== computerChoice){

        switch(playerChoice){
            case 'rock':

                if(computerChoice === 'paper'){
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
                } else if (computerChoice == 'scissors'){
                    console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
                }

                break;

            case 'paper':

                if(computerChoice === 'scissors'){
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
                } else if (computerChoice == 'rock'){
                    console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
                }
                
                break;

            case 'scissors':

                if(computerChoice === 'rock'){
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
                } else if (computerChoice == 'paper'){
                    console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
                }

                break;
        }
    } else {
        console.log(`DRAW! You both chose ${playerChoice}!`);
    }

    
}

playRound(playerSelection, computerSelection);