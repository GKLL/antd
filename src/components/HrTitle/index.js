import React from 'react';
import styles from './HrTitle.less';

const HrTitle = (props) => (
  <div className={styles.hrTitle}>
    <div className={styles.hrLine}></div>
    <h2>
      {props.title}
      <span>{props.dec}</span>
    </h2>
    <div className={styles.hrLine}></div>
  </div>
)

export default HrTitle;