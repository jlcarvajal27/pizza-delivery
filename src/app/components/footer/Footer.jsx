import React from "react";
import { UilGithub, UilLinkedin } from "@iconscout/react-unicons";
import css from "./Footer.module.css";
// import Image from "next/image";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>Dev: Jorge Carvajal ©</span>
      <div className={css.social}>
        <a href="https://github.com/jlcarvajal27" target="_blank">
          <UilGithub size={45} />
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-luis-carvajal/"
          target="_blank"
        >
          <UilLinkedin size={45} />
        </a>
      </div>

      {/* <div className={css.logo}>
        <Image src="/cooking.png" alt="logo" width={50} height={50} />{" "}
        <span>Jc Food </span>
      </div> */}
    </div>
  );
};

export default Footer;
