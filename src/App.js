import GameOfLife from './canvas_game_of_life';
import * as patterns from './patterns';


function Pair(props) {
  return <div className="Pair">{props.children}</div>
}

function Half(props) {
  return <div className="Half">{props.children}</div>
}

function Description(props) {
  return <div className="Description">{props.children}</div>
}




function App() {
  return (

<div className="container">

  
    <div className="App">

    <div className="container">
      <h1>Conway's Game of Life</h1>
    </div>

        <Pair>
          <Half>
          <h2>What is it?</h2>
            <p>"Conway's Game of Life" (or just "Life") is a cellular automaton: a grid of cells, with each cell changing its state over time.</p>
            <p>The simulation works as a zero-player game, meaning that its evolution is <b>determined only by its initial state.</b></p>
          </Half>

          <Half>
            <GameOfLife data={patterns.sirRobin}  /> 
            <Description>A so-called <b>Sir Robin</b>, found by Adam P. Goucher on March 6, 2018, based on a partial by Tomas Rokicki. </Description>
          </Half>

        </Pair>



        <Pair>
          <Half>
            <h2>The origins</h2>
            <p>At the Los Alamos National Laboratory in the 1940s, a researcher named Stanislaw Ulam studied the growth of crystals.</p>
            <p>There was also some other guy called John von Neumann at Los Alomos, working on the problem of self-replicating systems.</p>
            <p>Inspired by both, John Conway began his experiments in 1968. His goal was to define an <b>unpredictable cellular automaton.</b></p>
          </Half>
  
          <Half>
            <img src={require('./crystal.jpg')} alt="a crystal" /> 
            <Description>All crystal structures can be described with lattice systems, where atoms, ions and molecules form ordered structures.</Description>
          </Half>

          
        </Pair>


        <Pair>
          <Half>
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
          </Half>
          
          <Half>
            <GameOfLife data={patterns.GIG}  /> 
            <Description>A <b>GIG</b> or glider injection gate: a device for injecting a glider into a glider stream. This specific example is a pseudo-period 14 glider stream discovered by Dieter Leithner in 1996.</Description>
          </Half>
        </Pair>


        <Pair>
          <Half>
            <h2>Patterns</h2>

            <p>Possible patterns are infinite, but they can be classified. 3 common patterns are:</p>
            <p>
            <ol type="1">
              <li><b>still lifes</b> do not change at all.</li>
              <li><b>oscillators</b> keep returning to their initial state.</li>
              <li><b>spaceships</b> fly through the grid-universe.</li>
            </ol> 
            </p>
            <p>The first patterns were discovered without computers, but with blackboards, graph paper or the board game Go.</p>

          </Half>
          
          <Half>
            <GameOfLife data={patterns.basicPatterns}  />
            <Description>Still lives on the left, oscillators on the right. Spaceships below the block wall.</Description>
          </Half>
           
        </Pair>


        <Pair>
          <Half>
            <h2>Infinite growth gun</h2>
            <p>At first, Conway believed that no pattern can grow forever, and offered 50 dollars to the first person to prove him wrong.</p>
            <p>The price was won in 1970 by Gosper's team at the Massachusetts Institute of Technology.</p>
            <p>They came up with a pattern called "Gosper glider gun", which produces glider patterns <b>infinitely.</b></p>
            <p>Countless crazy patterns have been discovered ever since.</p>
          </Half>
          
          
          <Half>
            <GameOfLife data={patterns.gliderGun}  />
            <Description>The <b>Gosper glider gun</b>, the first known gun and finite pattern producing infinite growth. Discovered by Bill Gosper and his team in November 1970.</Description>
          </Half>

        </Pair>


        <Pair>
          <Half>
            <h2>But why?</h2>
            <p>Now why would grown up researchers play around with a bunch of patterns?</p>
            <p>For science! Because Life is</p>
            <p>
            <ol type="1">
              <li><b>Turing-Complete</b>, meaning it can be used to build the logic gates AND, OR, and NOT using glider collisions.</li>
              <li>a <b>universal constructor</b>, a self-replicating machine with the ability to mutate and grow in complexity.</li>
            </ol> 
            </p>
          </Half>
          
          <Half>
            <GameOfLife data={patterns.gliderSynthesisPentadecathlon}  />
            <Description>A <b>3-glider synthesis</b> of a pentadecathlon, found in April 1997 by Heinrich Koenig. A <b>universal constructor</b> would be a pattern capable of constructing any pattern that has a glider synthesis.</Description>
          </Half>

        </Pair>



        <Pair>
          <Half>
            <h2>So long, and thanks for all the patterns</h2>

            <p>You can find the commented source code of this page and how to build your own game of life with Javascript & React here:</p>
            <a href="https://github.com/alpin111/game-of-life">https://github.com/alpin111/game-of-life</a> 


            <p>The conwaylife lexicon where you can copy ascii-like patterns from:</p>
            <a href="https://conwaylife.com/ref/lexicon/lex_p.htm">https://conwaylife.com/ref/lexicon/lex_p.htm</a> 
          </Half>
          

          <Half>
            <img src={require('./Trefoil_knot.gif')} alt="a crystal" /> 
            <Description>Life on the texture of a trefoil knot by Raphaelaugusto.</Description>
          </Half>
          
        </Pair>



        

        

    
      {/* app */}
        </div> 

    {/* container */}
    </div>
  );
}





export default App;

