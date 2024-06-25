import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "/react-tours-project";
// const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
  return (
    <main>
      {loading ? (
        <div>
          <h2 className="title">Loading...</h2>
        </div>
      ) : (
        <Tours posts={posts} setPosts={setPosts} url={url} />
      )}
    </main>
  );
}
export default App;
