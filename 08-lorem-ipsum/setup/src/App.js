import React, { useState } from "react";
import data from "./data";
function App() {
  const [content, setContent] = useState([]);
  const [inputIndex, setIndex] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    const index = Number(inputIndex);
    let str = [];
    for (let i = 0; i < index; i++) {
      str.push(data[i]);
    }
    setContent(str);
  };

  return (
    <main>
      <div>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form" onSubmit={(e) => handleClick(e)}>
          <label>Paragraphs:</label>
          <input
            type="number"
            value={inputIndex}
            min="1"
            onChange={(e) => setIndex(e.target.value)}
          />
          <button className="btn">Generate</button>
        </form>
        <div className="result">
          {content.map((val) => {
            return <p>{val}</p>;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
