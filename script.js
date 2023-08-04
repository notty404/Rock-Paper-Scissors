const ComputerChoice = function GetComputerChoice(){
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
    let choice = choice.toLowerCase(prompt("choose your option",''))
        if (choice === 'rock'|| choice === 'paper' || choice === 'scissors'){ return choice;}
            else
            {console.log('Error!');}
        }
    }


function GameRound(PlayerSelection,ComputerSelection){
    PlayerSelection = UserChoice();
    ComputerSelection = ComputerChoice();

}