'use strict';
let hiddenNumber = document.querySelector(".number").textContent = 10;
const again = document.querySelector(".again").textContent;
let guess = document.querySelector('.guess').value = 10;
let message = document.querySelector(".message");
let score = document.querySelector('.score');
let highScore = document.querySelector('.highScore');



const check = document.querySelector(".check").addEventListener('click',function(){
    if(guess === hiddenNumber){
        message.textContent = 'correct guess';
    }
});