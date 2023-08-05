import React, { useState } from 'react';
import styles from './PriceListControl.module.scss';

// components
import PriceList from '../../../IndexPage/PriceList/PriceList';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPriceItem, deletePriceItem } from '../../../../redux/slices/priceSlice';
const PriceListControl = () => {
  const {priceList, state1, state2, state3} = useSelector((state: any) => state.priceSlice);
  const [deleteNum, setDeleteNum] = useState('');

  const [addNum, setAddNum] = useState('');
  const [value, setValue] = useState('');
  const [oldValue, setOldValue] = useState('');
  const [points, setPoints] = useState('');

  const dispatch = useDispatch();

  const addItem = () => {
    if(addNum === '1') {
      dispatch(addPriceItem({id: state1.length+1, addNum: addNum, value: value, oldValue: oldValue, points: points.split('|')}));
    } else if(addNum === '2') {
      dispatch(addPriceItem({id: state2.length+1, addNum: addNum, value: value, oldValue: oldValue, points: points.split('|')}));
    } else if(addNum === '3') {
      dispatch(addPriceItem({id: state3.length+1, addNum: addNum, value: value, oldValue: oldValue, points: points.split('|')}));
    }
  }

  const deleteItem = () => {
    dispatch(deletePriceItem(deleteNum));
    setDeleteNum('');
  }

  return (
    <div className={styles.control}>
      <PriceList />

      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockTitle}>Удаление элемента</div>
          <input className={styles.leftBlockInput} value={deleteNum} onChange={(e) => setDeleteNum(e.target.value)} type="text" placeholder='Введите номер колонки' />
          <div className={styles.leftBlockContinue} onClick={deleteItem}>Удалить по номеру</div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.rightBlockTitle}>Добавление элемента</div>
          <input className={styles.rightBlockInput} value={addNum} onChange={(e) => setAddNum(e.target.value)} type="text" placeholder='Введите номер колонки' />
          <input className={styles.rightBlockInput} value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Введите новую Цену' />
          <input className={styles.rightBlockInput} value={oldValue} onChange={(e) => setOldValue(e.target.value)} type="text" placeholder='Введите старую Цену' />
          <input className={styles.rightBlockInput} value={points} onChange={(e) => setPoints(e.target.value)} type="text" placeholder='Введите условия' />
          <div className={styles.rightBlockContinue} onClick={addItem}>Добавить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PriceListControl);