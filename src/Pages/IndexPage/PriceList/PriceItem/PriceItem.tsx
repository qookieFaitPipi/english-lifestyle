import React from 'react';
import styles from './PriceItem.module.scss';

// types
import { PriceItemType } from '../../../../@types/types';

const PriceItem: React.FC<PriceItemType> = ({value, old_value, points}) => {
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