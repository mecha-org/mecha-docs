import React from "react";
import s from "./block.module.css";

export const Block = ({ children, title }) => {
  return (
    <div className={`${s.root} ${!title ? s.noTitle : ''}`}>
      {title && <h2>{title}</h2>}
      <div className={s.container}>{children}</div>
    </div>
  );
};
