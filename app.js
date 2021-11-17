const word = document.querySelector('.word');
const input = document.querySelector('.input');
const score = document.querySelector('.scored');
const time = document.querySelector('.timed');
const reload = document.querySelector('.reload');
const difficultied = document.querySelector('#difficulty');
const start = document.querySelector('.start');
const form = document.querySelector('form');
console.log(form)

const words = [
    'hi',
    'bye',
    'gg',
    'him'
];

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty'): 'medium';

difficultied.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty'): 'medium';

let randomWord;

let scoring = 0;

let timing = 10;

input.focus();

const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
    timing--;
    time.innerHTML = timing;
    if(timing === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver(){
    reload.innerHTML = `
    <h2>game has finished</h2>
    <p>your score is ${scoring}</p>
    <button onclick="location.reload()">reload</button>
    `
    reload.style.display = 'block';
    start.style.display = 'none';
}

function randomPhrase() {
    return words[Math.floor(Math.random()*words.length)];
}

function addRandomWord() {
    randomWord = randomPhrase();
    word.innerHTML = randomWord;
}

function updateScore() {
    scoring++;
    score.innerHTML = scoring;
}

input.addEventListener('input', e => {
    const phrase = e.target.value;
    if(phrase === randomWord){
        updateScore();
        addRandomWord();
        e.target.value = '';
        if(difficulty === 'easy'){
            timing += 4
        }else if(difficulty === 'medium'){
            timing += 2
        }else if(difficulty === 'hard'){
            timing += 1;
        }
    }
})

form.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty',difficulty);
})

addRandomWord()