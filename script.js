'use strict';
let hiddenNumber = document.querySelector(".number").textContent = 10;
const again = document.querySelector(".again").textContent;
let guess = document.querySelector('.guess').value = 16;
let message = document.querySelector(".message").textContent;
let score = document.querySelector('.score');
let highScore = document.querySelector('.highScore');



let check = document.querySelector(".check").addEventListener('click',function(){
    if(guess === hiddenNumber){
        message = 'correct guess';

    }
});