/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <span className={styles.title}>Hi,</span><span className={styles.title}> I'm Shashwat</span>WEB-DEVELOPER||FRONT-END DEVELOPER||FULL-STACK DEVELOPER
          <p className={styles.description}>
            "With 1 year of experience using: HTML,CSS,Bootstrap,Javascript, React,ExpressJs,
            NodeJS and MongoDB."<br/>I'm excited to explore new opportunities and collaborate on innovative projects—let's connect!
          </p>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/img4.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };