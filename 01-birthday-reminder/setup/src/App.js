import React, { useEffect, useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(data);
  }, []);
  const handleSubmit = () => {
    setPeople([]);
  };
  // console.log("people===", people);
  return (
    <>
      {/* <h2>reminder project setup</h2> */}
      <main className="main">
        <div className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={handleSubmit}>Clear All</button>
        </div>
      </main>
    </>
  );
}

export default App;
