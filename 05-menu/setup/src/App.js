import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all"];
for (let i = 0; i < items.length; i++) {
  if (!allCategories.includes(items[i].category)) {
    allCategories.push(items[i].category);
  }
}

function App() {
  const [menu, setMenu] = useState(items);
  // const [buttonCategories, setButtonCategories] = useState(allCategories);
  const itemsDisplay = (category) => {
    if (category === "all") {
      setMenu(items);
    } else {
      const updateditems = items.filter((val) => val.category === category);
      setMenu(updateditems);
    }
  };

  return (
    <main>
      <section className="section">
        <div className="menu">
          <h3 className="title"> Our Menu</h3>
          <p className="underline"></p>
        </div>
        <Categories
          buttonCategories={allCategories}
          itemsDisplay={itemsDisplay}
        />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
