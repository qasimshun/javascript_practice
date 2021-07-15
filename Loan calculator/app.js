const calculate = document.getElementById('calculate');

function main(){
    console.log('ggg')
    const loan = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const calculate = document.getElementById('calculate');
    const monthly = document.getElementById('monthly');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(loan.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value)*12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthylyPayments = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthylyPayments)){
        monthly.value = monthylyPayments.toFixed(2);
        totalPayment.value = (monthylyPayments * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthylyPayments * calculatedPayments) - principal).toFixed(2);
    }else {
        showerror('please check your value');
    }
}

function showerror(item){
    const errorDiv = document.createElement('div');
    const box = document.querySelector('.box');
    const heading = document.querySelector('.heading')
    errorDiv.className = 'gg';
    errorDiv.append(document.createTextNode(item));
    box.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.gg').remove();
}


// event listener
calculate.addEventListener('click', main);