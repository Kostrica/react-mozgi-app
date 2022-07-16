import React from 'react';

import styles from './RunningLine.module.scss';

const RunningLine = () => {
  const text = 'full-cycle event agency '.repeat(3);

  return (
    <div className={styles.container}>
      <span className={styles.infiniteLeft}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </span>
      <span className={styles.infiniteRight}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </span>
    </div>
  );
};

export default RunningLine;
