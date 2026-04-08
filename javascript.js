
    const choices = ["rock", "paper", "scissor"];
     const computerDisplay = document.getElementById ("computerDisplay");
     const playerDisplay = document.getElementById ("playerDisplay");
     const resultDisplay = document.getElementById ("resultDisplay");
     const computerScoreDisplay = document.getElementById ("computerScoreDisplay");
     const playerScoreDisplay = document.getElementById ("playerScoreDisplay");
        let playerScore = 0;
        let computerScore = 0;

     function playGame (playerChoice) {

        const computerChoice = choices[Math.floor(Math.random () * 3)];
        let result = ""

        if (computerChoice === playerChoice) {
            result = "it is a tie"
        } else {
            switch (playerChoice) {
                case "rock":
                    result = (computerChoice === "scissor") ? "YOU WIN" : "YOU LOSE"
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE"
                    break;
                case "scissor":
                    result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE"
                    break;
            }
        }

        playerDisplay.textContent = `PLAYER ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER ${computerChoice}`;
        resultDisplay.textContent = result;

        switch (result) {
            case "YOU WIN":
            playerScore++
            playerScoreDisplay.textContent = playerScore;
            break;
            case "YOU LOSE":
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
        }
     };
