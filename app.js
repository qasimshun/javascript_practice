const speechBtn = document.querySelector('.speech');
const voiceSelect = document.querySelector('#select');
const readBtn = document.querySelector('.read');
const content = document.querySelector('#gg');

speechBtn.addEventListener('click',e => {
    e.target.previousElementSibling.classList.toggle('show');
});

let voices = [];

// get voices 
function getVocies() {
    voices = speechSynthesis.getVoices();
    voices.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.innerHTML = `${item.name} ${item.lang}`
        voiceSelect.appendChild(option)
    })
}

getVocies()

const message = new SpeechSynthesisUtterance();

console.log(message)

// set text of message 
function setText(item){
    message.text = item;
}

// set voices 
function setvoices(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}


console.log(speechSynthesis)

// speak things
function speaked() {
    speechSynthesis.speak(message);
}

voiceSelect.addEventListener('change', setvoices);

readBtn.addEventListener('click', () => {
    setText(content.value);
    speaked();
});

