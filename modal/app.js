const modal = document.querySelector('.one');
const another = document.querySelector('.two');

function showHim(e){
    e.target.parentElement.nextElementSibling.classList.toggle('show');
}

function showUL(e){
    e.target.nextElementSibling.classList.toggle('gg');
}



modal.addEventListener('click', showHim);
another.addEventListener('click', showUL);

