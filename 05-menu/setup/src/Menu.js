import React from "react";

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((val, index) => {
        return (
          <article className="menu-item" key={val.id}>
            <img src={val.img} alt={val.title} className="photo" />
            <div className="item.info">
              <header>
                <h4>{val.title}</h4>
                <p className="price">{val.price}</p>
              </header>
              <p className="item-text">{val.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
