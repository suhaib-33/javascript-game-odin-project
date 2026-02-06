


function getComputerChoice () {
    let a = ["rock", "paper", "scissor"]
    return a [Math.floor(Math.random () * a.length)]
};



function getHumanChoice () {
    let b = prompt ("enter: rock, paper, or scissor?")

    b = b.toLowerCase();

    if (b === "rock" || b === "paper" || b === "scissor") {
        return b
    } else {
        return getHumanChoice();
    }
};

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
 humanChoice = humanChoice.toLowerCase()

 if (humanChoice == computerChoice) {
    console.log("it is a tie");

 } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock");
 } else if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore++;
    console.log("You win! Rock beats scissor");
 } else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerScore++;
    console.log("You lose! Scissor beats Paper");
 } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! paper beats rock");
 } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissor beats Paper");
 } else if (humanChoice === "scissor" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats scissor");
 }
};


function playGame () {
    for (i =1; i <=5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanThink = getHumanChoice();
        const computerThink = getComputerChoice();
        playRound(humanThink, computerThink);
    }
       console.log(`Score: Human ${humanScore} - Computer ${computerScore}\n`);
}

if (humanScore > computerScore) {
    console.log("You are the overall winner!");
} else if (computerScore > humanScore) {
    console.log("The computer is the overall winner!");
}   else {
    console.log("The game is a tie overall!");
};

playGame();