import React from "react";
import CentralCircle from "../CentralCircle/CentralCircle";
import MenuItem from "../MenuItem/MenuItem";
import RunningLine from "../RunningLine/RunningLine";
import styles from "./Main.module.scss";

const Main = ({ translateX, translateY, textRef }) => (
  <div className={styles.container}>
    <MenuItem
      text="where?"
      link="/about"
      className="verticalTop"
    />
    <div className={styles.main}>
      <CentralCircle
        translateX={translateX}
        translateY={translateY}
        textRef={textRef}
      />
      <RunningLine />
    </div>
    <MenuItem
      text="what?"
      link="/about"
      className="verticalBottom"
    />
  </div>
);

export default Main;
