import React from "react";

import styles from "./styles.module.css";

const SmallGrid = ({ children, home = false }) => (
  <section className={styles.cardGrid}>
    <div className={styles.container}>
      {"map" in children ? (
        children.map((child, idx) => <article key={idx}>{child}</article>)
      ) : (
        <article>{children}</article>
      )}
    </div>
  </section>
);

export default SmallGrid;
