import Canvas from "./canvas_hook"; // Change the path according to the directory structure of your project


const draw = function (context, data, Columns = 100, only_initial=false) {
    
var cellWorld = {}
var Columns = Columns 
var Rows = Columns
const cellSize = 500/Columns
var loopcount = 0
var data = data
var context = context
var only_initial = only_initial

CreateWorld()

function CreateWorld() {
    CreateGrid()
    window.requestAnimationFrame(() => gameLoop())
}

function key_xy(x, y) {return x.toString() + "_" + y.toString(); }

function coords_xy(key) {
    let x,y
    [x,y] = key.split("_")
    return [parseInt(x), parseInt(y)]
}


function CreateGrid() {
    let alive_cells = data
    let initial_state = {};
    alive_cells.forEach(cell => initial_state[key_xy(cell[0], cell[1])] = 1);
    
    // Variables declared by let have their scope in the block for which they are declared, as well as in any contained sub-blocks. 
    // In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function: 
      for (let y = 0; y < Rows; y++) {
          for (let x = 0; x < Columns; x++) {
            if (key_xy(x, y) in initial_state) { var alive = 1} else {var alive = 0}
            
                cellWorld[key_xy(x, y)] = alive
          }
      }
    //   console.log(cellWorld)
}


function drawCell(x,y,alive) {
    let width = cellSize
    let height = width
    context.fillStyle = alive?'#00e0ff':'#172b2e'
    context.fillRect(x * width, y * height, width, height)
}



function checkLivesigns(x,y) {
    // check if it's outside the grid
    if (x < 0 || x >= Columns || y < 0 || y >= Rows){
        return false;
    }
    return cellWorld[key_xy(x, y)]?1:0
}


function surroundingCells() {
    var new_cells = {}
    const neighbours_list = [[-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]]

    // attempted performance optimization: we only care about the cells that are alive and their neighbours
    // var relevant_cells = {}
    // Object.keys(cellWorld).forEach(
    //     function(cell) {
    //         if (cellWorld[cell] === 1 ) { 
    //             // alive cells
    //             relevant_cells[cell] = 1 
    //             // their neighbours
    //             let x,y 
    //             [x,y] = coords_xy(cell)
    //             neighbours_list.forEach(neighbour => relevant_cells[key_xy(x+neighbour[0], y+neighbour[1])] )
                
    //         }
    //     }
    // )
    Object.keys(cellWorld).forEach(
        function(cell) {
            let x,y 
            [x,y] = coords_xy(cell)
            var alive_neighbours = 0
            neighbours_list.forEach(neighbour => alive_neighbours += checkLivesigns(x+neighbour[0],y+neighbour[1]))
            // if 2 are alive, nothing changes
            if (alive_neighbours === 2) {new_cells[cell] = cellWorld[cell]}

            // if 3 are alive, the cell becomes alive
            else if (alive_neighbours === 3) {new_cells[cell] = 1}

            // otherwise it will die
            else {new_cells[cell] = 0}
        }
    )
    cellWorld = new_cells
    // attempt at optimization
    // cellWorld = {
    //     ...cellWorld,
    //     ...new_cells,
    // }
}


function reDraw() {
    Object.keys(cellWorld).forEach( function(cell) {
            let x,y 
            [x,y] = coords_xy(cell)
            drawCell(x,y, cellWorld[cell])
        } )
}


function gameLoop() {
        // Check the surrounding of each cell
        if (loopcount < 200) {
        loopcount += 1
        surroundingCells()
        // Clear the screen
        context.clearRect(0, 0, 500, 500);
        // Draw all the gameobjects
        reDraw()
        // The loop function has reached it's end, keep requesting new frame

        if (only_initial === false)  {
        // setTimeout( () => {
            window.requestAnimationFrame(() => gameLoop());
        // }, 10)
        }

    }
}

};





  function App({data,size=100}) {
    return (
    <>
    <Canvas draw={draw} height={400} width={400} data={data} Columns={size} />
      </>);
  }

  export default App;