
            let score = JSON.parse(localStorage.getItem('score')) ||  {
           
                    wins: 0,
                    losses: 0,
                    ties: 0
                };

                updateScoreElement();

/*
            if (!score) {   // score === null
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                }
            }
*/
        
            function playGame(playerMove) {
                const computerMove = pickComputerMove();  
        
                let result = '';
        
                if (playerMove === 'scissors') {
                    if (computerMove === 'rock') {
                        result = 'You lose.';
                    } else if (computerMove === 'paper') {
                        result = 'You win.';
                    } else if (computerMove === 'scissors') {
                        result = 'Tie.';
                    }


                } else if (playerMove === 'paper') {
                    if (computerMove === 'rock') {
                        result = 'You win.';
                    } else if (computerMove === 'paper') {
                        result = 'Tie.';
                    } else if (computerMove === 'scissors') {
                        result = 'You lose.';
                    }


                } else if (playerMove === 'rock') {
                    if (computerMove === 'rock') {
                        result = 'Tie.';
                    } else if (computerMove === 'paper') {
                        result = 'You lose.';
                    } else if (computerMove === 'scissors') {
                        result = 'You win.';
                    }
                }
        
                // Update the score based on the result
                if (result === 'You win.') {
                    score.wins++;       //  or score.wins = score.wins + 1
                } else if (result === 'You lose.') {
                    score.losses++;
                } else if (result === 'Tie.') {
                    score.ties++;
                }


                localStorage.setItem('score', JSON.stringify(score));

                // To display our score on the page
                updateScoreElement();

                //To display our result on the page
                document.querySelector('.js-result').innerHTML = result;

                //To display the moves on the page
                document.querySelector('.js-moves').innerHTML = 
                `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon">Computer</p> `;
                
            }

            function updateScoreElement() {
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }
        
            // Function to pick a random computer move
            function pickComputerMove() {
                const randomNumber = Math.random();
        
                if (randomNumber < 1 / 3) {
                    return 'rock';
                } else if (randomNumber < 2 / 3) {
                    return 'paper';
                } else {
                    return 'scissors';
                }
            }
        