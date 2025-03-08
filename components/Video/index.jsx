import React from "react";

import styles from "./styles.module.css";

const Video = ({ src }) => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={src}
        title="video player"
        allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.iframe}
        width="750" height="510"
      >
      </iframe>
    </div>
  );
};

export default Video;
