'use strict';
let highScore = 0;
let hiddenNumber = Math.trunc(Math.random()*10)+1;
let score  = 10;


document.querySelector(".check").addEventListener('click', function () {    
const guess = Number(document.querySelector('.guess').value);
var message = document.querySelector('.message');
let scoreUpdate = document.querySelector('.score');
const body = document.querySelector('body');
const numsize = document.querySelector('.number');

if(!guess){
    message.textContent = '😶no guess done!';
    // if the guess is right
    }else if(guess === hiddenNumber){
    message.textContent = '✅ correct guess!';
        document.querySelector('body').classList.add('body');
        document.querySelector('.number').classList.add('numbers');
        document.querySelector(".number").textContent = hiddenNumber;
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // if the guess is wrong
        else if(guess !== hiddenNumber){
            if (score>1){
                message.textContent = guess < hiddenNumber ? '📉 Too low!!!' : '📈 Too high!!!';
                score--;
                scoreUpdate.textContent = score;
            }else{
                message.textContent = '😈 You lost the game'; 
                scoreUpdate.textContent = 0;
            }
        }
     }
    }
);


document.querySelector('.again').addEventListener('click', function(){
    hiddenNumber = Math.trunc(Math.random()*10)+1;
    document.querySelector(".number").textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    score = 10;
    document.querySelector('body').classList.remove('body');
    document.querySelector('.number').classList.remove('numbers');
    document.querySelector('.score').textContent= score;
})