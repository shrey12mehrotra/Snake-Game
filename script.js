import {update as updateSnake, draw as drawSnake,snakeSpeed, getSnakeHead, intersectItself} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';
//game loop
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime){
    if(gameOver){
        if(confirm("You've lost the game. Click Ok to restart.")){
            window.location = '/';  // to restart if game is lost
        }
    return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // division to convert msec to seconds
    if(secondsSinceLastRender < 1/snakeSpeed) 
        return;

    lastRenderTime = currentTime;

    update();
    draw();
}
window.requestAnimationFrame(main);

function update(){
    updateSnake();  
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

// function to check for death of snake
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || intersectItself();
}