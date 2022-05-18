# conway game-of-life study
A project to explain Conway's Game of Life to myself and other people with a short attention span.

static webpage built from repo at <https://conway-life-study.netlify.app/>

## What does it do?
1. transforms ascii-like patterns into arrays containing coordinates
2. the coordinate-array is then used as the data-input for a Conway game-of-life function displayed with canvas
3. embeds the canvas into React using hooks

### 1. ascii to array
scr/patterns.js


*input:* 
    
    
    ......O...

    ......O.O.

    ......OO..

    ..........

    OOO.......

    ..O.......

    .O.....OO.

    ........OO

    .......O..

*output:* 

`[[0,6], [1,6], ....]`


### 2. game of life function
scr/canvas_game_of_life.js

Builds a canvas according to Conways Game of Life:

    Any live cell with two or three live neighbours survives.
    Any dead cell with three live neighbours becomes a live cell.
    All other live cells die in the next generation. Similarly, all other dead cells stay dead.


### 3. canvas react hook
scr/canvas_hook.js