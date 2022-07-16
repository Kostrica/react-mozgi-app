import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import routes from "../../routes/routes.json";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={styles.container}>
      {pathname === routes.HOME && (
        <MenuItem
          text="who?"
          link={routes.ABOUT}
          className="horizontal"
        />
      )}
    </footer>
  );
}

export default Footer;
