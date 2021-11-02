function nToD(){
    let naira = document.getElementById('textField').value;
    let dollar = naira * 0.0017543;
    document.querySelector('.result').textContent = `#${naira} => $${dollar.toFixed(2)}`;
}

function dToN(){
    let dollar = document.getElementById('field').value;
    let naira = dollar * 570;
    document.querySelector('.dollar-result').textContent = `$${dollar} => #${naira.toFixed(2)}`;
}

function front(){
    let visibility = document.querySelector('.card1');
    visibility.classList.add('visible');
    document.querySelector('.card2').classList.remove('visible');
}

function back(){
    let visibility = document.querySelector('.card2');
    visibility.classList.add('visible');
    document.querySelector('.card1').classList.remove('visible');
}

let d = new Date();
document.querySelector('.year').textContent = d.getFullYear();

