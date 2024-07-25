"use client";

import Image from "next/image";
import css from "./Header.module.css";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { useStore } from "@/app/store/store";
import Link from "next/link";

const Header = () => {
  const cartItems = useStore((state) => state.cart.pizzas.length);

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link href="/">
          <Image src="/cooking.png" alt="logo" width={50} height={50} />
        </Link>
        <span>Jc Food </span>
      </div>

      <ul className={css.menu}>
        <Link href="/">
          <li>Home</li>
        </Link>

        <li>
          <a href="#benefits">Services</a>
        </li>

        <li>
          <a href="#menu">Menu</a>
        </li>
      </ul>

      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} />
            <div className={css.badge}>{cartItems}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
