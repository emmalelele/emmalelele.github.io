// 2D grid neighbors

let grid;
let cellSize;
const GRID_SIZE = 15;


function setup() {
  createCanvas(windowWidth, windowHeight);
  if (height > width){
    cellSize = width/GRID_SIZE;
  }
  else{
    cellSize = height/GRID_SIZE;
  }
  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  displayGrid();
}


function mousePressed(){
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  toggleCell(x,y);  
  toggleCell(x,y - 1);
  toggleCell(x+1,y);
  toggleCell(x-1,y);
}

function toggleCell(x,y){
  if (x >= 0 && x < GRID_SIZE -1 &&  y >= 0 && y < GRID_SIZE){
    if (grid[y][x] === 0){
      grid[y][x] === 1;
    }
    if (grid[y][x] === 1){
      grid[y][x] === 0;
    }
  }
}



function displayGrid(){
  for (let y = 0;  y < GRID_SIZE; y++){ //look at the horizontal line
    for (let x = 0; x < GRID_SIZE; x++){ //look at the vertical line
      if (grid[y][x] === 0){
        fill("white");
      }
      if (grid[y][x] === 1){
        fill("black");
      }
      rect(x *cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows){
  let randomArray = [];
  for (let y = 0; y < cols; y++){
    randomArray.push([])
    for (let x= 0; x < rows; x++){
      if (random(100) < 50){
        randomArray[y].push(0);
      }
      else{
        randomArray[y].push(1);
      }
    }
  }
  return randomArray;
}

function generateEmptyGrid(cols,rows){
  let randomArray = [];
  for (let y = 0; y < cols; y++){ //
    randomArray.push([]);
    for (let x= 0; x < rows; x++){
      randomArray[y].push(0);
  }
 }
 return randomArray;
}

