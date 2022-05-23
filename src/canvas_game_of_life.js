import Canvas from "./canvas_hook"; // Change the path according to the directory structure of your project



const draw = function (context, data) {
  // or shorter: const draw = context => {
  // Insert your canvas API code to draw an image
class Cell {
  static width = 5;
  static height = 5;

//   The constructor method is a special method of a class for creating and initializing an object instance of that class.
// A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
  constructor (context, gridX, gridY, alive) {
      this.context = context;
      // Store the position of this cell in the grid
      this.gridX = gridX;
      this.gridY = gridY;
      // Make random cells alive
    //   The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
      this.alive = alive

  }

  drawCell() {
      // Draw a simple square
      this.context.fillStyle = this.alive?'#00e0ff':'#172b2e'; 
    //   JavaScript Ternary Operator: condition ? value if true : value if false

    //  fillstyle = The CanvasRenderingContext2D.fillStyle property of the Canvas 2D API specifies the color, gradient, or pattern to use inside shapes. The default style is #000 (black). 
    //  fillRect = The CanvasRenderingContext2D.fillRect() method of the Canvas 2D API draws a rectangle that is filled according to the current fillStyle. 
      this.context.fillRect(this.gridX * Cell.width, this.gridY * Cell.height, Cell.width, Cell.height);
  }
}




class GameWorld {
      // A static variable in JavaScript is basically a property of the class which is not used on the object of the class but is used in the class itself.
    static numColumns = 100;
    static numRows = 100;

    constructor() {
      // this.canvas = document.getElementById(canvasId);
      //   HTMLCanvasElement.getContext() method returns a drawing context on the canvas (2d, webgl)
        this.context = context //this.canvas.getContext('2d'); 
        this.gameObjects = [];
        this.loopcount = 0
        this.reset = false

        this.createGrid();

        // Request an animation frame for the first time
        // The gameLoop() function will be called as a callback of this request
        window.requestAnimationFrame(() => this.gameLoop());
      //   The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.

    }

    createGrid() {
      let alive_cells = data
      let initial_state = {};
      alive_cells.forEach(cell => initial_state[this.gridToIndex(cell[0], cell[1])] = 1);
      
      // Variables declared by let have their scope in the block for which they are declared, as well as in any contained sub-blocks. 
      // In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function: 
        for (let y = 0; y < GameWorld.numRows; y++) {
            for (let x = 0; x < GameWorld.numColumns; x++) {
              //Math.random() > 0.4;
              if (this.gridToIndex(x, y) in initial_state) { var alive = 1} else {var alive = 0}
              
              //    The push() method adds one or more elements to the end of an array and returns the new length of the array. 
                this.gameObjects.push(new Cell(this.context, x, y, alive));
            }
        }
    }

    isAlive(x, y) {
        if (x < 0 || x >= GameWorld.numColumns || y < 0 || y >= GameWorld.numRows){
            return false;
        }
        return this.gameObjects[this.gridToIndex(x, y)].alive?1:0;
    }

    gridToIndex(x, y){
      //   returns the nth Cell in the order it was created (two nested for loop, x first, then y * number_of_x_columns)
        return x + (y * GameWorld.numColumns); 
    }

    checkSurrounding () {
        // Loop over all cells
        for (let x = 0; x < GameWorld.numColumns; x++) {
            for (let y = 0; y < GameWorld.numRows; y++) {

                // Count the nearby population
                let numAlive = this.isAlive(x - 1, y - 1) + this.isAlive(x, y - 1) + this.isAlive(x + 1, y - 1) + this.isAlive(x - 1, y) + this.isAlive(x + 1, y) + this.isAlive(x - 1, y + 1) + this.isAlive(x, y + 1) + this.isAlive(x + 1, y + 1);
                let centerIndex = this.gridToIndex(x, y);

                if (numAlive === 2){
                    // Do nothing
                    this.gameObjects[centerIndex].nextAlive = this.gameObjects[centerIndex].alive;
                }else if (numAlive === 3){
                    // Make alive
                    this.gameObjects[centerIndex].nextAlive = true;
                }else{
                    // Make dead
                    this.gameObjects[centerIndex].nextAlive = false;
                }
            }
        }

        // Apply the new state to the cells
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].alive = this.gameObjects[i].nextAlive;
        }
    }

    gameLoop() {

        if (this.loopcount < 500){

            this.loopcount += 1
            // Check the surrounding of each cell
            this.checkSurrounding();

            // Clear the screen
            this.context.clearRect(0, 0, 500, 500);

            // Draw all the gameobjects
            for (let i = 0; i < this.gameObjects.length; i++) {
                this.gameObjects[i].drawCell();
            }    
            // The loop function has reached it's end, keep requesting new frame
            setTimeout( () => {
              window.requestAnimationFrame(() => this.gameLoop());
            }, 10)
        }

    }
}
context = new GameWorld()
};





  function App({data}) {
    return (
    <>
    <Canvas draw={draw} height={400} width={400} data={data} />
      </>);
  }

  export default App;