import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    const indexNext = currentIndex + 1;
    setCurrentIndex(indexNext < data.length ? indexNext : 0);
  };
  const handlePrev = () => {
    const indexPrev = currentIndex - 1;
    setCurrentIndex(indexPrev > 0 ? indexPrev : data.length - 1);
  };
  const { image, name, title, quote } = data[currentIndex];
  return (
    <section className="section">
      <div className=".title">
        {/* <span> </span> */}
        <div className="section-center">
          <article>
            <img className="person-img " src={image} alt={name} />
            <h3> {name}</h3>
            <h4 className="title">{title}</h4>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        </div>
        <button className="prev" onClick={handlePrev}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next" onClick={handleNext}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  );
}

export default App;
