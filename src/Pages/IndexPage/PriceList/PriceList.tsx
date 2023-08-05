import React, {useEffect, useState} from 'react';
import styles from './PriceList.module.scss';
import axios from 'axios';

// images
import tsconfig from './../../../Assets/images/tsconfig.png';

// components
import PriceItem from './PriceItem/PriceItem';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPriceState, setPriceItems } from '../../../redux/slices/priceSlice';

// types
import { PriceItemType } from '../../../@types/types';

const PriceList: React.FC = () => {
  const {state1, state2, state3} = useSelector((state: any) => state.priceSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://admin.english-lifestyle.ru/api/get_prices').then((response) => {
      dispatch(setPriceState(response.data));
      dispatch(setPriceItems({state1: response.data[0], state2: response.data[1], state3: response.data[2]}))
    });
  }, [])

  console.log(state1, state2, state3);

  
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
            {state1.map((obj: PriceItemType) => 
              <PriceItem
                key={obj.id} 
                id={obj.id} 
                value={obj.value} 
                old_value={obj.old_value} 
                points={obj.points}
              />
            )}
          </div>
          <div className={styles.priceListColumn}>
            {state2.map((obj: PriceItemType) => 
              <PriceItem
                key={obj.id} 
                id={obj.id} 
                value={obj.value} 
                old_value={obj.old_value} 
                points={obj.points}
              />
            )}
          </div>
          <div className={styles.priceListColumn}>
            {state3.map((obj: PriceItemType) => 
              <PriceItem
                key={obj.id} 
                id={obj.id} 
                value={obj.value} 
                old_value={obj.old_value} 
                points={obj.points}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PriceList);