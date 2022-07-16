import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ text, link, className }) => (
  <nav className={styles.container}>
    <Link to={link} className={styles[className]}>{text}</Link>
  </nav>
);

export default MenuItem;
