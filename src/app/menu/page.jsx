"use client";

import css from "./Menu.module.css";
import CardMenu from "./CardMenu";

const Menu = () => {
  return (
    <>
      <div id="menu" className={css.container}>
        <div className={css.heading}>
          <span>Our Menu.</span>
          <span>Menu that will always </span>
          <span>Make you fall in love </span>
        </div>
      </div>
      <CardMenu />
    </>
  );
};

export default Menu;
