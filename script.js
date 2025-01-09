let playerScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultDiv = document.getElementById('result');
    const playerScoreSpan = document.getElementById('playerScore');
    const computerScoreSpan = document.getElementById('computerScore');


    if (userChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${userChoice}`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    } else {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }

    
    resultDiv.classList.remove('animate');
    setTimeout(() => resultDiv.classList.add('animate'), 10);
}