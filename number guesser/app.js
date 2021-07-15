// game values
let min = 1,
    max = 10,
    winningNumber = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('.box'),
      minNum = document.querySelector('.min'),
      maxNum = document.querySelector('.max'),
      guessBtn = document.querySelector('#submit'),
      guessInput = document.querySelector('#number'),
      message = document.querySelector('.message');


// assign min and max number
minNum.textContent = min;
maxNum.textContent = max;

// main function
function main() {
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        showMessage('please give number between 1 and 10', 'red');
    }

    if(guess === winningNumber){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        showMessage(`${winningNumber} you have won because the guess was correct`, 'green');
    }
}

// message function
function showMessage(request, color){
    message.style.color = color;
    message.textContent = request;
}

// Listen for guess event
guessBtn.addEventListener('click', main);
