import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question </h3>

        <SingleQuestion questions={questions} setQuestions={setQuestions} />
      </div>
    </main>
  );

  // <h2>accordion project setup</h2>;
}

export default App;
