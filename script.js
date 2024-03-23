const x = document.querySelector('.result');

function clickNumber(number){
    if(x.classList.contains('empty')){
        x.classList.remove('empty');
    }
    x.innerHTML += number;
}
function clearBorde(){
    x.innerHTML = '';
    if(!x.classList.contains('empty')){
        x.classList.add('empty');
    }
}
function calculate(){
    x.innerHTML = eval(x.innerHTML);
}