const sumbitBtn = document.getElementById('sumbit');
const userNameInput = document.getElementById('username').value;
const emailInput = document.getElementById('email').value;
const passwordInput = document.getElementById('password').value;
const confirmInput = document.getElementById('confirm').value;
const input = document.querySelectorAll('input');
const message = document.querySelectorAll('.message');
const form = document.querySelector('form');
const one = document.getElementById('one');
const two = document.getElementById('two');

const textMessage = () => {
    message.forEach((item)=>{
      
      if(item.previousElementSibling.value==''){
        item.textContent=`${item.previousElementSibling.id} is empty`;
        }else if(item.id=== 'two' || item.id ==='one'){
            if(item.previousElementSibling.value.length<5){
                item.textContent = 'short password plz write longer';
                item.previousElementSibling.style.borderBottom = '2px solid red';
            }else {
                item.previousElementSibling.style.borderBottom = '2px solid green';
            }
        }else {
            item.style.display = 'none';
        }
    });
    
}

const messageShow = () => {
    input.forEach((item)=>{
        if(item.value.trim()===''){
            item.classList.add('error');
            item.classList.remove('success');
        }else {
            item.classList.add('success');
            item.classList.remove('error');
        }
    });
    textMessage();

}





const formAddingHandler = (e) => {
    e.preventDefault();
}


sumbitBtn.addEventListener('click', messageShow)

form.addEventListener('submit', formAddingHandler);