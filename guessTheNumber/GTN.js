let randomNum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const lastGuessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = []
let numOfGuess = 1
let playGame = true


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number!!')
    } else if (guess < 1 || guess > 100){
        alert('Please enter a number between 1 & 100')
    } else {
        prevGuess.push(guess)

        if(numOfGuess > 10) {
            displayGuess(guess)
            displayMessage(`Game Over!! Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`Voila! you guesses it right.`)
        endGame()
    } else if (guess < randomNum){
        displayMessage(`Guess is too LOW!!`)
    }
    else {
        displayMessage(`Guess is too HIGH!!`)
    }
}

function displayGuess(guess){
    // Cleaning the guessNum field.
    userInput.value = ''
    lastGuessSlot.innerHTML += `${guess}, `
    numOfGuess++;
    remainingGuess.innerHTML = `${11 - numOfGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numOfGuess = 1
        lastGuessSlot.innerHTML = ''
        remainingGuess.innerHTML = `${11 - numOfGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h1 id ="newGame">Start new Game</h1>`
    startOver.appendChild(p)
    playGame = false;

    newGame()
}