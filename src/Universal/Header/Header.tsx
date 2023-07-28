import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <a href='tel:+79036164615' className={styles.headerInfoTel}>+7 903 616 46 15</a>
      </div>
    </div>
  )
}

export default React.memo(Header);