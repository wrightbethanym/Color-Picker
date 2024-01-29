import { useState } from "react";

// Write your Color component here

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  const Color = ({color}) => {
    return (
    <div
    onClick={() => setSelectedColor(color)}
    className={`${color} ${selectedColor === color && "selected"}`}
    ></div>
    );
  };
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
       </div>
    </div>
  );
  };
export default App;
