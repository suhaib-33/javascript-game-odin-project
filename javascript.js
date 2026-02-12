


/*         let humanScore = 0;
        let computerScore = 0;


        function getComputerChoice () {
            let choice = ["rock", "paper", "scissor"];
            return choice[Math.floor(Math.random () * choice.length)]
        };

        function getHumanChoice () {
            let response = prompt ("Enter: rock, paper, scissor");

            if (!response) return getHumanChoice();

            response= response.toLowerCase();

            if (response === "rock" || response === "paper" || response === "scissor") {
                return response
            } else {
                return getHumanChoice();
            }
        };

        function playRound (humanChoice, computerChoice) {

         if (humanChoice === computerChoice) {
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
            for (let i=1; i <= 5; i++) {
                console.log (`----ROUND ${i}----`);
                let humanChoice = getHumanChoice();
                let computerChoice = getComputerChoice();
                playRound (humanChoice, computerChoice);
            }

        console.log (`YOUR SCORE = ${humanScore} , COOMPUTER SCORE = ${computerScore}`)

        if (humanScore > computerScore) {
            console.log ("Congrats!!! you win the match");
        } else if (humanScore < computerScore) {
            console.log ("Better Try next time. YOU Losee");
        } else {
            console.log ("This match is tie, Play again!!");
        }
    };

     playGame(); */

     const btn = document.querySelector("#btn");

     btn.addEventListener ("click", (e) => {
        alert("Button clicked Atttention!");
     });