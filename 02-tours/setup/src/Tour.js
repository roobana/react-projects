import React, { useState } from "react";

const Tour = ({ handleDelete, handleShow, show, items }) => {
  return (
    <>
      <li className="single-tour" key={items.id}>
        <img src={items.image} alt={items.name}></img>
        <footer>
          <div className="tour-info">
            <h4 className="single-tour">{items.name}</h4>
            <h4 className="tour-price">${items.price}</h4>
          </div>
          <p>
            {show ? items.info : `${items.info.slice(0, 300)}...`}
            <button onClick={handleShow}>
              {" "}
              {show ? "showless" : "showmore"}
            </button>
          </p>

          <button className="delete-btn" onClick={() => handleDelete(items.id)}>
            Not Interested
          </button>
        </footer>
      </li>
    </>
  );
};

export default Tour;
