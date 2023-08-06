import React, { useState } from 'react';
import styles from './PriceListControl.module.scss';

// components
import PriceList from '../../../IndexPage/PriceList/PriceList';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPriceItem, deletePriceItem } from '../../../../redux/slices/priceSlice';
const PriceListControl: React.FC = () => {
  const {state1, state2, state3} = useSelector((state: any) => state.priceSlice);
  const [controlDelNum, setControlDelNum] = useState<string>('');

  const [controlAddNum, setControlAddNum] = useState<string>('');
  const [controlValue, setControlValue] = useState<string>('');
  const [controlOldValue, setControlOldValue] = useState<string>('');
  const [controlPoints, setControlPoints] = useState<string>('');

  const dispatch = useDispatch();

  const addItem = () => {
    if(controlAddNum === '1') {
      dispatch(addPriceItem({id: -1, addNum: controlAddNum, value: controlValue, oldValue: controlOldValue, points: controlPoints.split('|')}));
    } else if(controlAddNum === '2') {
      dispatch(addPriceItem({id: -1, addNum: controlAddNum, value: controlValue, oldValue: controlOldValue, points: controlPoints.split('|')}));
    } else if(controlAddNum === '3') {
      dispatch(addPriceItem({id: -1, addNum: controlAddNum, value: controlValue, oldValue: controlOldValue, points: controlPoints.split('|')}));
    }
  }

  const deleteItem = () => {
    dispatch(deletePriceItem(controlDelNum));
    setControlDelNum('');
  }

  return (
    <div className={styles.control}>
      <PriceList />

      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockTitle}>Удаление элемента</div>
          <input className={styles.leftBlockInput} value={controlDelNum} onChange={(e) => setControlDelNum(e.target.value)} type="text" placeholder='Введите номер колонки' />
          <div className={styles.leftBlockContinue} onClick={deleteItem}>Удалить по номеру</div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.rightBlockTitle}>Добавление элемента</div>
          <input className={styles.rightBlockInput} value={controlAddNum} onChange={(e) => setControlAddNum(e.target.value)} type="text" placeholder='Введите номер колонки' />
          <input className={styles.rightBlockInput} value={controlValue} onChange={(e) => setControlValue(e.target.value)} type="text" placeholder='Введите новую Цену' />
          <input className={styles.rightBlockInput} value={controlOldValue} onChange={(e) => setControlOldValue(e.target.value)} type="text" placeholder='Введите старую Цену' />
          <input className={styles.rightBlockInput} value={controlPoints} onChange={(e) => setControlPoints(e.target.value)} type="text" placeholder='Введите условия' />
          <div className={styles.rightBlockContinue} onClick={addItem}>Добавить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PriceListControl);