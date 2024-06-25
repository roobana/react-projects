import React from "react";

const Categories = ({ buttonCategories, itemsDisplay }) => {
  return (
    <div className="btn-container">
      {buttonCategories.map((category) => (
        <button
          className="filter-btn"
          key={category}
          onClick={() => itemsDisplay(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
