import React, { useState } from "react";
import Tour from "./Tour";
const Tours = ({ posts, setPosts, url }) => {
  const [show, setShow] = useState(false);
  const handleDelete = (id) => {
    const updatePosts = posts.filter((val) => {
      return val.id !== id;
    });
    setPosts(updatePosts);
  };

  const handleRefresh = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };
  const handleShow = () => {
    setShow(!show);
  };
  // let length = posts.items.length / 2;
  return (
    <div>
      {posts.length ? (
        <>
          <div className="title">
            <h3>Our Tours</h3>
            <div className="underline"></div>
          </div>
          <ul>
            {posts.map((items) => {
              return (
                <Tour
                  handleDelete={handleDelete}
                  handleRefresh={handleRefresh}
                  handleShow={handleShow}
                  show={show}
                  items={items}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <div>
          <h4>No Tours Left</h4>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      )}
    </div>
  );
};

export default Tours;
