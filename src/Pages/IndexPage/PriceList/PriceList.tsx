import React, { useState } from 'react';
import styles from './PriceList.module.scss';

// images
import tsconfig from './../../../Assets/images/tsconfig.png';

// components
import PriceItem from './PriceItem/PriceItem';


const PriceList = () => {

  const arr1 = ['Определение уровня владения английским языком по CEFR', 'Пробное занятие с методистом'];
  const arr2 = ['4 урока в месяц (раз в неделю)', 'Один урок – 45 минут', 'Составление резюме'];
  const arr3 = ['8 уроков в месяц (два раза в неделю)', 'Один урок – 45 минут', 'Составление резюме'];
  const arr4 = ['12 уроков в месяц (три раза в неделю)', 'Один урок – 45 минут', 'Составление резюме'];


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
            <PriceItem price={'БЕСПЛАТНО'} points={arr1} />
          </div>
          <div className={styles.priceListColumn}>
            <PriceItem price={'8000₽'} points={arr2} />
            <PriceItem price={'16000₽'} points={arr3} />
          </div>
          <div className={styles.priceListColumn}>
            <PriceItem price={'24000₽'} points={arr4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PriceList);