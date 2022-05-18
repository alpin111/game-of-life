// src/components/Canvas.js
import React from 'react';
import PropTypes from 'prop-types';

const Canvas = ({draw, height, width, data}) => {
    const canvas = React.useRef();  // The useRef Hook allows you to persist values between renders.
    
    React.useEffect(() => { // The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
      const context = canvas.current.getContext('2d');
      draw(context, data);
    }, [canvas]);

    return (<div className="GameOfLife"  style={{display:"block"}}>
      <canvas ref={canvas} height={height} width={width} />
      <br/>
      <button
        onClick={() => {
        const context = canvas.current.getContext('2d');
        context.clearRect(0, 0, 500, 500);
        draw(context, data);
        
      }}>restart this universe</button>

    </div>);
  };
  // Typechecking With PropTypes ..
  // As your app grows, you can catch a lot of bugs with typechecking. 
  // For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. 
  // But even if you don’t use those, React has some built-in typechecking abilities. 

  Canvas.propTypes = {
    draw: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };
  export default Canvas;