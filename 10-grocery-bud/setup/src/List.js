import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ listOfItems, setListOfItems }) => {
  const handleDelete = (ind) => {
    const updateList = listOfItems.filter((val, index) => {
      return index !== ind;
    });
    setListOfItems(updateList);
  };

  const handleClick = (index) => {
    let tempList = [...listOfItems];
    tempList[index].strike = !tempList[index].strike;
    setListOfItems(tempList);
  };
  return (
    <div className="grocery-item">
      <ul>
        {listOfItems.map((item, index) => {
          return (
            <div className="grocery-item">
              <li
                style={{
                  textDecoration: item.strike ? "line-through" : "none",
                }}
                key={index}
              >
                <input
                  type="checkbox"
                  value={item.strike}
                  onClick={() => handleClick(index)}
                />

                {item.value}
                <button onClick={() => handleDelete(index)}>
                  <FaTrash />
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
