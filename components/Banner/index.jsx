import React from "react";

import styles from "./styles.module.css";

const Banner = ({ path, title }) => (
  <section className={styles.Banner}>
    <img src={path} alt={title}></img>
  </section>
);

export default Banner;
