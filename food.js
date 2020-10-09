import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';
let food = getRandomFoodPosition();
const expansion_rate = 1;   // rate of increment of size of snake after eating one food
export function update(){
    if(onSnake(food)){
        expandSnake(expansion_rate);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }

    // function to randomization of food position
function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null ||  onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}