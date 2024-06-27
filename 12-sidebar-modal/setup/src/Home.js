import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import Mycontext from "./context";

const Home = () => {
  const homeprops = useContext(Mycontext);
  const { handleSideBar } = homeprops;
  return (
    // <div className="sidebar-toggle">
    <button onClick={handleSideBar}>
      <FaBars />
    </button>
    // </div>
  );
};

export default Home;
