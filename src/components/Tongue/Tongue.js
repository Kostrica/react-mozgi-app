import React from "react";
import tonguePath from "../../assets/img/tongue.png";

import styles from "./Tongue.module.scss";

const Tongue = () => (
  <div className={styles.container}>
    <div className={styles.tongueContainer}>
      <img className={styles.tongue} src={tonguePath} alt="Tongue"/>
    </div>
    <div className={styles.tongueMenu}>
      <button className={styles.buttonEn}>en</button>
      <button className={styles.buttonUa}>ua</button>
    </div>
  </div>
);

export default Tongue;
