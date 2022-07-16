import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes/routes.json";

import styles from "./About.module.scss";

export const About = () => (
  <div className={styles.container}>
    <Link to={routes.HOME} className={styles.link}>
      Return to the main page
    </Link>
  </div>
);

export default About;
