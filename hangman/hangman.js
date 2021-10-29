const head = document.querySelector('.head');
const body = document.querySelector('.body');
const armOne = document.querySelector('.arm-one');
const armTwo = document.querySelector('.arm-two');
const legOne = document.querySelector('.leg-one');
const legTwo = document.querySelector('.leg-two');
const popUp = document.querySelector('.pop-up');
const answer = document.querySelector('.answer');
const playAgainBtn = document.querySelector('.play-again');
const wrongAnswer = document.querySelector('.wrong');
const answerWords = ['windows','programming','gg','wow','i dont know'];

let selectedWords = answerWords[Math.floor(Math.random()*answerWords.length)];

const correctWords = [];
const wrongWords = [];

function displayWord() {
    answer.innerHTML = `
        ${selectedWords.split('')
        .map(letter => `<span>
            ${correctWords.includes(letter) ? letter : ''}
            </span>`
        ).join('')
    }
    `;
    const innerWord = answer.innerHTML.replace(/\n/g,'');
    if(innerWord === selectedWords){
        popUp.innerHTML = 'congragulation you won';
        popUp.style.dispaly = 'block';
    }
}

function updateWrongElement() {
    wrongAnswer.innerHTML = `
    ${wrongWords.length ? '<p>wrong</p>' : ''}
    ${wrongWords.map(letter => `<span>${letter}</span>`
    )}
    `
}

window.addEventListener('keydown', e => {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        if(selectedWords.includes(letter)){
            if(!correctWords.includes(letter)){
                correctWords.push(letter);
                displayWord();
            }
        }else {
            if(!wrongWords.includes(letter)){
                wrongWords.push(letter);
                updateWrongElement();
            }
        }
    }
})
 

displayWord()