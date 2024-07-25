import React from "react";
import css from "./Benefits.module.css";
import Image from "next/image";

const Benefits = () => {
  return (
    <>
      <div id="benefits" className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favorites Food</span>
        <span>Delivery Partners</span>
      </div>

      <div className={css.services}>
        <div className={css.features}>
          <div className={css.imageWrapper}>
            <Image src="/s1.png" width={310} height={310} />
          </div>
          <span>Easy to Orders</span>
          <span>You only need a few steps in food ordering.</span>
        </div>

        <div className={css.features}>
          <div className={css.imageWrapper}>
            <Image src="/s2.png" width={310} height={310} />
          </div>
          <span>Easy to Orders</span>
          <span>Delivery that is always on time even faster.</span>
        </div>

        <div className={css.features}>
          <div className={css.imageWrapper}>
            <Image src="/s3.png" width={345} height={310} />
          </div>
          <span>Easy to Orders</span>
          <span>Not only fast for us, quality is also number one.</span>
        </div>
      </div>
    </>
  );
};

export default Benefits;
