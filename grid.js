const grid_size = 21;

// function to get random grid position for food to be placed
export function randomGridPosition(){
    return{
        x: Math.floor(Math.random() * grid_size) + 1,
        y: Math.floor(Math.random() * grid_size) + 1
    }
}

// function to check if snake position is outside the grid
export function outsideGrid(position){
    return (
        position.x < 1 || position.x > grid_size ||
        position.y < 1 || position.y > grid_size
    )
}