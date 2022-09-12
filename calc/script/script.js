
let text = document.querySelector('#textview');

function insert(num){
    text.value = text.value + num;
}

function insertSign(num){
    if(text.value){
        text.value = text.value + num;
    }
}

function cleanText(){
    text.value = '';
}

function backText(){
   let exp = text.value;
   text.value = exp.substring(0,exp.length-1);
}

function equel(){
    let exp = text.value;
    if(exp)
    text.value = eval(text.value);
}

