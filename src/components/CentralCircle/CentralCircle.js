import React from "react";
import Showreel from "./Showreel/Showreel";

import styles from "./CentralCircle.module.scss";

const CentralCircle = ({ translateX, translateY, textRef }) => (
  <div className={styles.container}>
    <span
      className={styles.title}
      ref={textRef}
      style={{ transform: `translateX(${translateX}px) translateY(${translateY}%)` }}
    >
      full-cycle event agency
    </span>
    <Showreel />
  </div>
);

export default CentralCircle;
