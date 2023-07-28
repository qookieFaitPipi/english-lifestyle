import React from 'react';
import styles from './PriceItem.module.scss';

interface PriceItemProps {
  price: string;
  points: string[];
}

const PriceItem: React.FC<PriceItemProps> = ({price, points}) => {
  return (
    <div className={styles.priceItem}>
      <div className={styles.priceItemContent}>
        <div className={styles.priceItemPrice}>{price}</div>
        {points.map(obj =>
          <div className={styles.priceItemDescription}>&bull; {obj}</div>
        )}
      </div>
    </div>
  )
}

export default React.memo(PriceItem);