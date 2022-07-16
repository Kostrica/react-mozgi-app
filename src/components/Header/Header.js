import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Tongue from "../Tongue/Tongue";
import { ReactComponent as Menu } from "../../assets/img/menu.svg";

import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.container}>
    <div className={styles.left}>
      <Tongue />
    </div>
    <Logo />
    <div className={styles.right}>
      <Link to="/about" className={styles.link}>
        <Menu className={styles.menu} />
      </Link>
    </div>
  </header>
);

export default Header;
