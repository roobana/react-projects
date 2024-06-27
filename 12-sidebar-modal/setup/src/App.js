import React, { useState } from "react";
import data from "./data";

import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
function App() {
  return (
    <>
      {/* <main> */}
      <Home />
      <Modal />
      <Sidebar />

      {/* </main> */}
    </>
  );
}

export default App;
