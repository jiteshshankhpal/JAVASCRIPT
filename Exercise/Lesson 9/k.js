const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
}

document.querySelector('.rock-btn')
    .addEventListener('click', () => {
        playGame('rock');
    });

document.querySelector('.paper-btn')
    .addEventListener('click', () => {
        playGame('paper');
    });

document.querySelector('.scissors-btn')
    .addEventListener('click', () => {
        playGame('scissors');
    });

document.querySelector('.reset-btn')
    .addEventListener('click', () => {
       resetScore();
    })
function resetScore() {
    document.querySelector('.message-text').innerHTML =
        `Are you sure you want to reset the score?
                <button class="yes-btn">Yes</button>
                <button class="no-btn">NO</button>`

    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');

    yesBtn.addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScore();
        document.querySelector('.message-text').innerHTML = '';
    });

    noBtn.addEventListener('click', () => {
        document.querySelector('.message-text').innerHTML = '';
    })
}    

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        playGame('rock');
    } else if(event.key === 'p') {
        playGame('paper');
    } else if(event.key === 's') {
        playGame('scissors');
    } else if(event.key === 'a') {
        autoPlay();
    } else if(event.key === 'Backspace') {
        resetScore();
    }
})

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }

    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves')
        .innerHTML = `You
                <img class="move-icon" src="../../Code/images/${playerMove}-emoji.png">
                <img class="move-icon" src="../../Code/images/${computerMove}-emoji.png">
            Computer `

    updateScore();

}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

let intervalId;
let notAutoPlaying = true;

document.querySelector('.auto-play-btn')
    .addEventListener('click', () => {
        autoPlay();
    })

function autoPlay() {
    if (notAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        notAutoPlaying = false;
        document.querySelector('.auto-play-btn').innerHTML = 'Stop Playing'
    } else {
        clearInterval(intervalId);   
        notAutoPlaying = true;
        document.querySelector('.auto-play-btn').innerHTML = 'Auto Play'
    }
}