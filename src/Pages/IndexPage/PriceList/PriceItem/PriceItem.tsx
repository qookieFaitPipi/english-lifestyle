import React from 'react';
import styles from './PriceItem.module.scss';

const PriceItem = () => {
  return (
    <div className={styles.priceItem}>
      <div className={styles.priceItemContent}>
        <div className={styles.priceItemPrice}>8000₽</div>
        <div className={styles.priceItemDescription}>Point</div>
        <div className={styles.priceItemDescription}>Point</div>
      </div>
    </div>
  )
}

export default React.memo(PriceItem);