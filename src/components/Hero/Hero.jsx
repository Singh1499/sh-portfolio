/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hey there, I'm Shashwat Singh</h1>
          <p className={styles.description}>
            I'm a full-stack developer with 1 year experience of using: HTML,CSS,Bootstrap,Javascript, React,ExpressJs,
            NodeJS and MongoDB.<br/>Reach out if you'd like to learn more!
          </p>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/mypic.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };