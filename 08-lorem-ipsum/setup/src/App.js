import React, { useState } from "react";
import data from "./data";
function App() {
  const [content, setContent] = useState([]);
  const [inputIndex, setIndex] = useState(1);
  const handleClick = () => {};
  setContent(data[index]);
  return (
    <main>
      <div>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form">
          <label>Paragraphs:</label>
          <input type="number" value="1" onChange={()=>}>
          <button className="btn" onClick={handleClick}>
            Generate
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
