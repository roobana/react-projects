import React, { useState } from "react";
import people from "./data";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ children }) => {
  const [index, setIndex] = useState(0);
  const handleClickNext = (index) => {
    const nextIndex = index + 1;
    const newIndex = nextIndex < data.length ? nextIndex : 0;

    setIndex(newIndex);
  };
  const handleClickPrev = (index) => {
    const prevIndex = index - 1;
    const newIndex = prevIndex >= 0 ? prevIndex : data.length - 1;
    setIndex(newIndex);
  };
  const handleSurprise = () => {
    const surprise = Math.floor(Math.random() * data.length);
    setIndex(surprise);
  };
  return (
    <div className="container">
      <p>{children}</p>
      <div className="review">
        <div className="img-container">
          <img
            className="person-img "
            src={data[index].image}
            alt={data[index].name}
          />
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <p className="author"> {data[index].name}</p>
        <p className="job"> {data[index].job}</p>
        <p className="info">{data[index].text}</p>

        <div>
          <button className="prev-btn" onClick={() => handleClickPrev(index)}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => handleClickNext(index)}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={handleSurprise}>
          surprise me
        </button>
      </div>
    </div>
  );

  // <h2>review component</h2>;
};

export default Review;
