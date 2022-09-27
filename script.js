'use strict';
var hiddenNumber = document.querySelector(".number").textContent = 10;
const again = document.querySelector(".again").textContent;
var guess = document.querySelector('.guess').value = 10;
var message = document.querySelector(".message").textContent;
var score = document.querySelector('.score');
var highScore = document.querySelector('.highScore');



const check = document.querySelector(".check").addEventListener('click', function(){  
    if(guess === hiddenNumber){
        message = 'correct guess';
    }
});