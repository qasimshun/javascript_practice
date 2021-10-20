const selection = document.querySelectorAll('.hand');
const playAgainBtn = document.querySelector('.mid button');
const selectedImage = {
    'Rock': 'Rock.png',
    'Paper': 'Paper.png',
    'Scissors': 'Scissors.png'
};
let SCORE = 0;

function handSelection(ele) {
    ele.addEventListener('click', ()=> {
        // hide the current page
        ele.parentElement.style.display = 'none';
        //display the next page
        ele.parentElement.nextElementSibling.style.display = 'grid';

        // set the user pick
        document.querySelector('.my-pick').src = selectedImage[ele.classList[0]];
        computerHand(ele.classList[0]);
    });
    playAgainBtn.addEventListener('click', ()=> {
        // hide result page
        ele.parentElement.style.display = 'grid';
        // show game page
        ele.parentElement.nextElementSibling.style.display = 'none';
    });
}

function computerHand(hand) {
    const gameElements = ['Rock', 'Paper', 'Scissors'];
    const pickedElement = Math.floor(Math.random()*3);
    document.querySelector('.computer-pick').src = `${gameElements[pickedElement]}.png`;
    referee(hand, gameElements[pickedElement]);
    console.log(hand)
    return gameElements[pickedElement];
}

function referee(userHand, cpHand) {
    if (userHand == "Paper" && cpHand == "Scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "Paper" && cpHand == "Rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "Paper" && cpHand == "Paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "Rock" && cpHand == "Scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "Rock" && cpHand == "Paper") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "Rock" && cpHand == "Rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "Scissors" && cpHand == "Scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "Scissors" && cpHand == "Rock") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "Scissors" && cpHand == "Paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
  };

function setDecision(decision) {
    document.querySelector('.mid h2').innerHTML = decision;
}

function setScore(score) {
    SCORE = score;
    document.querySelector('.heading').innerHTML = score;
}

selection.forEach(ele => {
    ele.addEventListener('click', handSelection(ele));
})