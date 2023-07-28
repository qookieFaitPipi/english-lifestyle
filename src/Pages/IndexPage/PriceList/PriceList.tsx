import React from 'react';
import styles from './PriceList.module.scss';

// images
import tsconfig from './../../../Assets/images/tsconfig.png';

// components
import PriceItem from './PriceItem/PriceItem';

const PriceList = () => {
  return (
    <div className={styles.priceList}>
      <div className={styles.priceListContent}>
        <div className={styles.priceListTopContainer}>
          <div className={styles.priceListTitleBlock}>
            <div className={styles.priceListTitle}>НАШИ ЦЕНЫ</div>
          </div> 
          <div className={styles.priceListInfoBlock}>
            <div className={styles.priceListInfo}>Специальный подарок!<br /> Каждому оплатившему курс за месяц <br /> мы составим резюме на английском языке, <br /> чтобы помочь Вам найти работу в другой стране</div>
            <img className={styles.priceListImage} src={tsconfig} alt="tsconfig" />
          </div>
        </div>
        <div className={styles.priceListMainContainer}>
          <div className={styles.priceListColumn}>
            <PriceItem />
          </div>
          <div className={styles.priceListColumn}>
            <PriceItem />
          </div>
          <div className={styles.priceListColumn}>
            <PriceItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PriceList);