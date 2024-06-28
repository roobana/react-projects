import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import sublinks from "./data";

function App() {
  const [navPage, setNavPage] = useState(null);
  // const handleMouseOver = (page) => {
  //   setNavPage(page);
  // };
  console.log(navPage);
  return (
    <>
      <div>
        {sublinks.map((val, index) => {
          const { page } = val;
          return (
            <div key={index} onMouseEnter={(e) => setNavPage(e.target.value)}>
              <h2>{page}</h2>
              <ul className={navPage === page ? "show" : ""}>
                {val.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url}>
                      {link.icon}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      {/* <h2>stripe submenus setup</h2>
      <Navbar />
      <Sidebar /> */}
    </>
  );
}

export default App;
