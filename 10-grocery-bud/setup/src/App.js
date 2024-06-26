import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listOfItems, setListOfItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      let temp = {
        value: inputValue,
        strike: false,
      };
      setListOfItems([...listOfItems, temp]);
      setInputValue("");
    }
  };

  return (
    <main>
      {/* <h2>grocery bud setup</h2> */}
      {/* <div className=""> */}
      <form className="form-control" onSubmit={handleSubmit}>
        <div>
          <input
            // className="grocery"
            type="text"
            placeholder="please Add the items"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
      <div className="grocery-container">
        <List listOfItems={listOfItems} setListOfItems={setListOfItems} />
      </div>
    </main>
  );
}

export default App;
