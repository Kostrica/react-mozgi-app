import React from 'react';
import { ReactComponent as Text } from '../../../assets/img/showreel.svg';

import styles from './Showreel.module.scss';

const Showreel = () => (
  <div className={styles.container}>
    <Text className={styles.text} />
    <div className={styles.dot} />
  </div>
);

export default Showreel;
