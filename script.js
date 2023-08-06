const ComputerChoice = function GetComputerChoice(){ // returns a random option between 'rock, paper and scissors'
    let RandomNum = Math.floor(Math.random()*3); 
    switch (RandomNum){
        case 0:
            return "rock"
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    };
};

const UserChoice = function GetUserChoice(){
    let choice = prompt("choose your option",'').toLowerCase();
        if (choice === 'rock'|| choice === 'paper' || choice === 'scissors'){ return choice;}
            else
            {console.log('Error!');}
        }

let PLAYERSCORE = 0;
let COMPUTERSCORE = 0;
function PlayRound(){
    let playerSelection = UserChoice();
    let computerSelection = ComputerChoice();
    if (playerSelection === computerSelection){
        return `it's a tie, you both chose ${playerSelection}`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        PLAYERSCORE+= 1;
        return `you win, rock beats scissors`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        PLAYERSCORE+=1;
        return `you win, paper beats rock`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        PLAYERSCORE+= 1;
        return `you win, scissors beats paper`;
    }
    else {
        COMPUTERSCORE+= 1;
        return `you lose, ${computerSelection} beats ${playerSelection}`;
    }
}
const game = function(){
    for(let i = 0; i < 5; i++){
    console.log(PlayRound());
    }
    let result = PLAYERSCORE > COMPUTERSCORE ? 'You win' : 'You Lose';
    return result;
}