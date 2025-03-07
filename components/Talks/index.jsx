import React from "react";

import styles from "./styles.module.css";

const Talks = ({children}) => (
  <div className={styles.container}>
    <div>
      {children}
    </div>
    <iframe
      style={{ borderRadius: "0.4rem", marginTop: -24 }}
      width="100%"
      height="350px"
      src="https://www.youtube.com/embed/DRNV1-9S0kQ"
      title="Mecha - Build computing in the real world - Shoaib Merchant"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
);

export default Talks;
