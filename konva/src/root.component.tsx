import { Stage, Layer, Rect } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={100} height={100} fill="red" shadowBlur={10} />
      </Layer>
    </Stage>
    // <div>Mounted</div>
  );
};
export default App;
