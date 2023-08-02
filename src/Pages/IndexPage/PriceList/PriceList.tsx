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
import { setPriceState } from '../../../redux/slices/priceSlice';

type priceItem = {
  id: number;
  value: string;
  old_value: string;
  points: string[];
}

const PriceList: React.FC = () => {
  const {priceList} = useSelector((state: any) => state.priceSlice);
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);
  const [state3, setState3] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://admin.english-lifestyle.ru/api/get_prices').then((response) => {
      dispatch(setPriceState(response.data));
      setState1(response.data[0]);
      setState2(response.data[1]);
      setState3(response.data[2]);
    });
  }, [])

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
            {state1.map((obj: priceItem) => 
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
            {state2.map((obj: priceItem) => 
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
            {state3.map((obj: priceItem) => 
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