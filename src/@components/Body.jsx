import { Layer, Stage, Line, Arrow } from "react-konva";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import Methods from "./Methods";

const Canvas = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [fromMethodId, setFromMethodId] = useState(null);
  const [connectors, setConnectors] = useState([]);

  // Sample shapes generation function for testing
  const generateShapes = () => {
    const shapes = [];
    for (let i = 0; i < 5; i++) {
      shapes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }
    return shapes;
  };

  const handleDragEnd = (id, newX, newY) => {
    setShapes((prevShapes) =>
      prevShapes.map((shape) =>
        shape.id === id ? { ...shape, x: newX, y: newY } : shape
      )
    );
  };

  const INITIAL_SHAPES = generateShapes();
  const [shapes, setShapes] = useState(INITIAL_SHAPES);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getOrthogonalPath = (from, to) => {
    const path = [];
    const offset = 20; // Offset for the orthogonal path

    // Start point
    path.push(from.x, from.y);

    // Horizontal line to vertical alignment
    path.push(to.x, from.y);

    // Vertical line to destination
    path.push(to.x, to.y);

    return path;
  };

  return (
    <Stage
      width={width * 2}
      height={height * 2}
      className="canvas z-40 relative overflow-auto bg-primary-dark-gray"
    >
      <Grid width={width * 2} height={height * 2} gridSize={30} />
      <Layer>
        {connectors.map((con) => {
          const from = shapes.find((s) => s.id === con.id);
          const to = shapes.find((s) => s.id === con.to);

          const path = getOrthogonalPath(from, to);

          console.log("from and to", from, to);

          return (
            <Arrow
              key={con.id}
              points={path}
              stroke="#7C7C7C"
              strokeWidth={2}
              lineCap="round"
              lineJoin="round"
            />
          );
        })}
        {shapes.map((shape) => (
          <Methods
            key={shape.id}
            x={shape.x}
            y={shape.y}
            id={shape.id}
            fromMethodId={fromMethodId}
            setFromMethodId={setFromMethodId}
            connectors={connectors}
            setConnectors={setConnectors}
            setShapes={setShapes}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
