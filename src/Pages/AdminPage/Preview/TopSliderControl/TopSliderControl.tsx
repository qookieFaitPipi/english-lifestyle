import React, { useState } from 'react';
import styles from './TopSliderControl.module.scss';

// components
import TopSlider from '../../../IndexPage/TopSlider/TopSlider';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTopSliderItem } from '../../../../redux/slices/sliderSlice';

const TopSliderControl = () => {
  const [num, setNum] = useState('');
  const dispatch = useDispatch();

  const addItem = () => {
    
  }

  const deleteItem = () => {
    dispatch(deleteTopSliderItem(num));
    setNum('');
  }

  return (
    <div className={styles.control}>
      <TopSlider />

      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockTitle}>Удаление элемента</div>
          <input className={styles.leftBlockInput} value={num} onChange={(e) => setNum(e.target.value)} placeholder='Введите номер отзыва' type="text" />
          <div className={styles.leftBlockContinue} onClick={deleteItem}>Удалить по номеру</div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.rightBlockTitle}>Добавление элемента</div>
          <input className={styles.rightBlockInput} type="file" />
          <input className={styles.rightBlockInput} type="text" placeholder='Введите подпись' />
          <div className={styles.rightBlockContinue}>Добавить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TopSliderControl);