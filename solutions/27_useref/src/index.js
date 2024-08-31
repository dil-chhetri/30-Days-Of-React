import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";
import ReactDOM from "react-dom";

// Function to generate a random hex color
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

// HexaColor component with forwardRef to allow parent component access to its methods
const HexaColor = forwardRef((props, ref) => {
  const [colors, setColors] = useState([]);

  // Method to generate and set 27 new colors
  const generateColors = () => {
    const newColors = [];
    for (let i = 0; i < 27; i++) {
      newColors.push(hexaColor());
    }
    setColors(newColors);
  };

  // Expose the generateColors method to parent component via ref
  useImperativeHandle(ref, () => ({
    generateColors,
  }));

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
});

// App component
const App = () => {
  const hexaColorRef = useRef(null);

  // Handle click event to trigger color generation
  const onClick = () => {
    if (hexaColorRef.current) {
      hexaColorRef.current.generateColors();
    }
  };

  return (
    <div className="App">
      <HexaColor ref={hexaColorRef} />
      <button onClick={onClick}>Generate</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
