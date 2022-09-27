'use strict';
const again = document.querySelector(".again").textContent;
const hiddenNumber = Math.trunc(Math.random()*10)+1;
document.querySelector(".number").textContent = hiddenNumber;
var score = document.querySelector('.score');
var highScore = document.querySelector('.highScore');



const check = document.querySelector(".check").addEventListener('click', function(){    
let guess = Number(document.querySelector('.guess').value);
let message = document.querySelector('.message').textContent;
    if(!guess){
        message = 'no guess done!!!';}
    // }else if(guess === hiddenNumber){
    //     message = 'correct guess!!!';
    // }else{

    // }
});