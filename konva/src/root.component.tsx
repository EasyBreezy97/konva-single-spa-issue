import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";

const ColoredRect = () => {
  const [color, setColor] = useState("green");

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Rect
      x={20}
      y={20}
      width={50}
      height={50}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
    />
  );
};

const App = () => {
  return (
    <>
      {/* ----- this should display ------ */}
      <div>Content</div>
      {/* -------------------------------- */}

      {/* ----- this have freeze error (uncomment to see the error) -------- */}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect />
        </Layer>
      </Stage>
      {/* -------------------------------- */}
    </>
  );
};

export default App;
