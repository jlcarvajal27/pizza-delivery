"use client";

import css from "./Menu.module.css";
import CardMenu from "./CardMenu";

const Menu = () => {
  return (
    <>
      <div id="menu" className={css.container}>
        <div className={css.heading}>
          <span>Our Menu</span>
          <span>Menu that Allways</span>
          <span>Make your fall in love </span>
        </div>
      </div>
      <CardMenu />
    </>
  );
};

export default Menu;
