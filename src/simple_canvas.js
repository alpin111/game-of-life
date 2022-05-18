import Canvas from "./canvas_hook"; // Change the path according to the directory structure of your project



const draw = (context, data) => {
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(10, 10, data, 50);

  context.fillStyle = "rgba(0, 0, 200, 0.5)";
  context.fillRect(30, 30, 50, 50);
}; // Example taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

function App({data}) {
  return <Canvas draw={draw} height={500} width={500} data={data} />;
}

export default App;