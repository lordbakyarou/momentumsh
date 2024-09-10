import { Layer, Stage } from "react-konva";
import Grid from "./Grid";
import { useEffect, useState } from "react";
// import MapComponent from "./MapComponent";
// import { FaDeaf } from "react-icons/fa";

const Canvas = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial call to set dimensions
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stage
      width={width * 2}
      height={height * 2}
      className="canvas z-40 relative overflow-auto bg-primary-dark-gray"
    >
      <Grid width={width * 2} height={height * 2} gridSize={30} />
      <Layer>
        {/* <MapComponent />
        <MapComponent />
        <MapComponent />
        <MapComponent />
        <MapComponent /> */}
      </Layer>
    </Stage>
  );
};

export default Canvas;
