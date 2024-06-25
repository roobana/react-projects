import React, { useState } from "react";
import Review from "./Review";
// import data from "./data";

function App() {
  // const [people, setPeople] = useState(data[0]);

  // console.log(people);
  return (
    <main>
      {" "}
      <>
        <div>
          <h3 className="title">Our Reviews</h3>
          <p className="underline"></p>
        </div>
        <Review>
          <p>hello</p>
        </Review>
      </>
    </main>
  );
}

export default App;
