// import './App.css';
import GameOfLife from './canvas_game_of_life';
import * as patterns from './patterns';


function Pair(props) {
  return <div style={{display:"flex", flexDirection:"row"}}>{props.children}</div>
}

function Text(props) {
  return <div style={{width:"40vw", paddingRight:"20px"}}>{props.children}</div>
}

// const lifeforms = {
//   "block": [[1,1], [1,2], [2,2], [2,1]],
//   "spaceship":[[58, 50], [57, 51], [58, 51], [59, 51], [61, 51], [62, 51], [56, 52], [57, 52], [61, 52], [63, 52], [64, 52], [55, 53], [56, 53], [59, 53], [65, 53], [56, 54], [62, 54], [66, 54], [68, 54], [69, 54], [70, 54], [55, 55], [56, 55], [62, 55], [66, 55], [68, 55], [71, 55], [53, 56], [54, 56], [56, 56], [58, 56], [59, 56], [64, 56], [66, 56], [68, 56], [72, 56], [54, 57], [56, 57], [59, 57], [60, 57], [72, 57], [51, 58], [52, 58], [54, 58], [57, 58], [60, 58], [70, 58], [51, 59], [52, 59], [54, 59], [60, 59], [61, 59], [71, 59], [73, 59], [74, 59], [75, 59], [51, 60], [53, 60], [67, 60], [68, 60], [69, 60], [71, 60], [73, 60], [75, 60], [76, 60], [50, 61], [51, 61], [53, 61], [54, 61], [66, 61], [67, 61], [69, 61], [72, 61], [74, 61], [76, 61], [64, 62], [65, 62], [67, 62], [71, 62], [72, 62], [73, 62], [76, 62], [77, 62], [83, 62], [84, 62], [63, 63], [67, 63], [74, 63], [83, 63], [85, 63], [62, 64], [68, 64], [71, 64], [72, 64], [74, 64], [76, 64], [77, 64], [83, 64], [61, 65], [64, 65], [66, 65], [73, 65], [75, 65], [61, 66], [67, 66], [68, 66], [73, 66], [74, 66], [75, 66], [63, 67], [74, 67], [60, 68], [62, 68], [74, 68], [59, 69], [60, 69], [62, 69], [64, 69], [65, 69], [66, 69], [58, 70], [60, 70], [62, 70], [66, 70], [57, 71], [58, 71], [60, 71], [56, 72], [60, 72], [66, 72], [67, 72], [56, 74], [57, 74], [59, 74], [60, 74]],
//   "knight": [[54, 50], [55, 50], [56, 50], [53, 51], [56, 51], [57, 51], [53, 52], [58, 52], [53, 54], [54, 54], [55, 54], [59, 54], [60, 54], [62, 54], [63, 54], [64, 54], [51, 55], [52, 55], [54, 55], [56, 55], [61, 55], [63, 55], [64, 55], [53, 56], [56, 56], [61, 56], [64, 56], [65, 56], [50, 57], [53, 57], [62, 57], [50, 58], [55, 58], [58, 58], [59, 58], [62, 58], [65, 58], [51, 59], [53, 59], [54, 59], [55, 59], [58, 59], [59, 59], [63, 59], [64, 59], [53, 60], [54, 60], [56, 60], [58, 60], [59, 60], [61, 60], [65, 60], [59, 61], [60, 61], [62, 61], [63, 61], [64, 61], [59, 62], [65, 62], [62, 63], [63, 63], [64, 63], [67, 63], [68, 63], [69, 63], [65, 64], [67, 64], [68, 64], [60, 65], [61, 65], [63, 65], [67, 65], [68, 65], [69, 65], [60, 66], [61, 66], [64, 66], [67, 66], [68, 66], [62, 67], [63, 67], [64, 67], [65, 67], [69, 67], [63, 68], [64, 68], [66, 68], [69, 68], [61, 69], [62, 69], [64, 69], [66, 69], [68, 69], [64, 70], [61, 71], [69, 71], [70, 71], [62, 72], [63, 72], [69, 72], [70, 72], [64, 73], [65, 73], [67, 73], [66, 74], [67, 74], [68, 74], [71, 74], [73, 74], [66, 75], [67, 75], [71, 75], [67, 76], [68, 77], [69, 77], [70, 77], [71, 77], [72, 77], [74, 77], [69, 78], [70, 78], [73, 78], [74, 78], [75, 78], [69, 79], [70, 79], [75, 79], [73, 80], [74, 80]],
// }




function App() {
  return (
    <div className="App">
        <h1>
          Conway's Game of Life
        </h1>

        <Pair>
          <Text>
          <h2>What is it?</h2>
            <p>The Game of Life is a cellular automaton, a grid of cells, with each cell changing its state over time.</p>
            <p>It simulates the evolution of complexity.</p>
            <p>The simulation works as a zero-player game, meaning that its evolution is determined only by its initial state.</p>
          </Text>

          <GameOfLife data={patterns.sirRobin}  /> 
        </Pair>



        <Pair>
          <Text>
            <h2>The origins</h2>
            <p>At the Los Alamos National Laboratory in the 1940s, a researcher named Stanislaw Ulam studied the growth of crystals.</p>
            <p>There was also some other guy called John von Neumann at Los Alomos, working on the problem of self-replicating systems.</p>
            <p>Inspired by both, John Conway began his experiments in 1968. His goal was to define an unpredictable cellular automaton.</p>
          </Text>
          
          <img src={require('./crystal.jpg')} alt="a crystal" /> 
        </Pair>


        <Pair>
          <Text>
            <h2>The rules</h2>

            <p>The universe of the Game of Life is an infinite, two-dimensional grid of cells.</p>
            <p>Each cell is either alive or dead, and evolves according to 3 rules:</p>
            <p>
            <ol type="1">
              <li>Any live cell with two or three live neighbours survives.</li>
              <li>Any dead cell with three live neighbours becomes a live cell.</li>
              <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
            </ol> 
            </p>
          </Text>
          
          <GameOfLife data={patterns.sirRobin}  /> 
        </Pair>


        <Pair>
          <Text>
            <h2>Patterns</h2>

            <p>Possible patterns are infinite, but they can be classified. 3 common patterns are:</p>
            <p>
            <ol type="1">
              <li>still lifes: do not change.</li>
              <li>oscillators: return to their initial state after finite time.</li>
              <li>spaceships: move across the grid.</li>
            </ol> 
            </p>
            <p>The first patterns were discovered without computers, but with blackboards, graph paper or the board game Go.</p>

          </Text>
          
          <GameOfLife data={patterns.sirRobin}  /> 
        </Pair>


        <Pair>
          <Text>
            <h2>Infinite growth</h2>
            <p>At first, Conway believed that no pattern can grow forever, and offered 50 dollars to the first person to prove him wrong.</p>
            <p>The price was won in 1970 by Gosper's team at the Massachusetts Institute of Technology.</p>
            <p>They came up with a pattern called "Gosper glider gun", which produces glider patterns infinitely.</p>
            <p>Countless crazy patterns have been discovered ever since.</p>
          </Text>
          
          <GameOfLife data={patterns.gliderGun}  />
        </Pair>


        <Pair>
          <Text>
            <h2>But why?</h2>
            <p>Now why would grown up researchers play around with a bunch of patterns?</p>
            <p>The Game of Life can be seen as relevant because</p>
            <p>
            <ol type="1">
              <li>it is <b>Turing-Complete</b>, meaning it can be used to build the logic gates AND, OR, and NOT using glider collisions.</li>
              <li>it works as a <b>universal constructor</b>, a self-replicating machine with the ability to mutate and thus grow in complexity.</li>
              {/* <li>it explores how design and organization can spontaneously emerge in the absence of a designer. </li> */}
            </ol> 
            </p>


          </Text>
          
          <GameOfLife data={patterns.gliderGun}  />
        </Pair>



        <img src={require('./Trefoil_knot.gif')} alt="a crystal" /> 

    {/* {Object.keys(lifeforms).map(key => <><br/><h2>{key}</h2><br/><GameOfLife data={lifeforms[key]} /> <br/></>)} */}
    {/* <Simple data={100} /> <p/> */}
    </div>
  );
}





export default App;

