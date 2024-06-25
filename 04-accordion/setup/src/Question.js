import React, { useState } from "react";
import data from "./data";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ questions, setQuestions }) => {
  const [showId, setShowId] = useState(null);
  // const [show, setShow] = useState(false);
  const handleClick = (id) => {
    // setShow(!show);
    setShowId(id === showId ? null : id);
  };
  return (
    <div>
      {questions.map((question) => {
        const { id, title, info } = question;
        return (
          <article className="question" key={id}>
            {/* <div className="question"> */}
            <header>
              <h4>{title} </h4>
              <button className="btn" onClick={() => handleClick(id)}>
                {id === showId ? <AiOutlineMinus /> : <AiOutlinePlus />}
                {/* {show ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
              </button>
            </header>
            {id === showId && <p> {info} </p>}

            {/* {show && <p> {info} </p>} */}
            {/* </div> */}
          </article>
        );
      })}
    </div>
  );
};

export default Question;
