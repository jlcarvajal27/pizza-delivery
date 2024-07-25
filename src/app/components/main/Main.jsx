import React from "react";
import css from "./Main.module.css";
import Image from "next/image";
import { UilPhone } from "@iconscout/react-unicons";

const Main = () => {
  return (
    <div className={css.container}>
      {/* left side */}

      <div className={css.leftSide}>
        <div className={css.cherryDiv}>
          <span>More Than Faster</span>
          <Image src="/Cherry.png" alt="cherry" width={40} height={25} />
        </div>

        <div className={css.mainText}>
          <span>Be The Faster</span>
          <span> In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Pizza!</span>
          </span>
        </div>

        <span className={css.miniText}>
          Our Mission is to filling your tummy with delicious food and with fast
          and free delivery
        </span>
        <button className="btn">Get Started</button>
      </div>

      {/* rigth side */}

      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image
            src="/HeroImage.png"
            width={630}
            height={90}
            alt="imageContainer"
          />
        </div>

        <div className={css.contactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src="/p1.jpg" width={300} height={200} alt="pizza" />
          </div>
          <div className={css.details}>
            <span>Italian Pizza!</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 7.5 USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
