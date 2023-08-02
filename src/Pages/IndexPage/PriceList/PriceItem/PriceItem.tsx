import React from 'react';
import styles from './PriceItem.module.scss';

type priceItemType = {
  id: number;
  old_value: string;
  value: string;
  points: string[]
}

const PriceItem: React.FC<priceItemType> = ({id, value, old_value, points}) => {
  return (
    <div className={styles.priceItem}>
      <div className={styles.priceItemContent}>
        <div className={styles.priceItemOldPrice}>{old_value}</div>
        <div className={styles.priceItemPrice}>{value}</div>
        {points.map(obj =>
          <div className={styles.priceItemDescription}>&bull; {obj}</div>
        )}
      </div>
    </div>
  )
}

export default React.memo(PriceItem);