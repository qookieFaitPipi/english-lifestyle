import React, { useState } from 'react';
import styles from './ReviewListControl.module.scss';

// components
import ReviewList from '../../../IndexPage/ReviewList/ReviewList';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteReviewsItem, addReviewsItem } from '../../../../redux/slices/reviewSlice';
const ReviewListControl: React.FC = () => {
  const [controlDelNum, setControlDelNum] = useState<string>('');

  const [controlText, setControlText] = useState<string>('');
  const [controlAuthor, setControlAuthor] = useState<string>('');
  const {reviewList} = useSelector((state: any) => state.reviewSlice);
  const dispatch = useDispatch();

  const deleteReview = () => {
    dispatch(deleteReviewsItem(controlDelNum));
  }

  const addReview = () => {
    dispatch(addReviewsItem({id: -1, content: controlText, author: controlAuthor}))
  }
 
  return (
    <div className={styles.control}>
      <ReviewList />

      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockTitle}>Удаление элемента</div>
          <input className={styles.leftBlockInput} value={controlDelNum} onChange={(e) => setControlDelNum(e.target.value)} placeholder='Введите номер отзыва' type="text" />
          <div className={styles.leftBlockContinue} onClick={deleteReview}>Удалить по номеру</div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.rightBlockTitle}>Добавление элемента</div>
          <input className={styles.rightBlockInput} value={controlText} onChange={(e) => setControlText(e.target.value)} type="text" placeholder='Вставьте содержимое отзыва' />
          <input className={styles.rightBlockInput} value={controlAuthor} onChange={(e) => setControlAuthor(e.target.value)} type="text" placeholder='Вставьте автора' />
          <div className={styles.rightBlockContinue} onClick={addReview}>Добавить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ReviewListControl);