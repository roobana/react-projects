import React from "react";

const List = ({ people }) => {
  return (
    <>
      {/* <h2>list component</h2> */}
      <ul>
        {people.map((items) => {
          return (
            <li key={items.id}>
              <div className="person">
                <img src={items.image} alt={items.name} />
                <div>
                  <h4>{items.name}</h4>
                  <p>{items.age} year </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
