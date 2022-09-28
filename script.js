'use strict';
let score  = 10;
const again = document.querySelector(".again").textContent;
const hiddenNumber = Math.trunc(Math.random()*10)+1;
var highScore = document.querySelector('.highScore');




document.querySelector(".check").addEventListener('click', function () {    
const guess = Number(document.querySelector('.guess').value);
let message = document.querySelector('.message');
let scoreUpdate = document.querySelector('.score');
const body = document.querySelector('body');
let numsize = document.querySelector('.number');

if(!guess){
    message.textContent = '😶no guess done!';
    }else if(guess === hiddenNumber){
    message.textContent = '✅ correct guess!';
        body.classList.add('body');
        numsize.classList.add('numbers');
        document.querySelector(".number").textContent = hiddenNumber;
    }else if(guess<hiddenNumber){
        if (score>1){
            message.textContent = '📉 Too low!!!';
            score--;
            scoreUpdate.textContent = score;
        }else{
            message.textContent = '😈 You lost the game'; 
            scoreUpdate.textContent = 0;
        }
    }else if(guess>hiddenNumber){
        if (score>1){
            message.textContent = '📈 Too high!!!';
            score--;
            scoreUpdate.textContent = score;
        }else{
            message.textContent = '😈 You lost the game'; 
            scoreUpdate.textContent = 0;
        }
        }else{

        }
    }
);