'use strict';
var hiddenNumber = document.querySelector(".number").textContent = 10;
const again = document.querySelector(".again").textContent;
// var message = document.querySelector(".message").textContent;
var score = document.querySelector('.score');
var highScore = document.querySelector('.highScore');



const check = document.querySelector(".check").addEventListener('click', function(){    
let guess = document.querySelector('.guess').value;
    if(!guess){
        document.querySelector('.message').textContent = 'no guess done!!!';
    }
});