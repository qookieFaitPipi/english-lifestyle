import React, { useState } from 'react';
import styles from './ReviewListControl.module.scss';

// components
import ReviewList from '../../../IndexPage/ReviewList/ReviewList';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteReviewsItem, addReviewsItem } from '../../../../redux/slices/reviewSlice';
const ReviewListControl = () => {
  const [deleteNum, setDeleteNum] = useState('');

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const {reviewList} = useSelector((state: any) => state.reviewSlice);
  const dispatch = useDispatch();

  const deleteReview = () => {
    dispatch(deleteReviewsItem(deleteNum));
  }

  const addReview = () => {
    dispatch(addReviewsItem({id:reviewList.length+1, content: text, author: author}))
  }
 
  return (
    <div className={styles.control}>
      <ReviewList />

      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockTitle}>Удаление элемента</div>
          <input className={styles.leftBlockInput} value={deleteNum} onChange={(e) => setDeleteNum(e.target.value)} placeholder='Введите номер отзыва' type="text" />
          <div className={styles.leftBlockContinue} onClick={deleteReview}>Удалить по номеру</div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.rightBlockTitle}>Добавление элемента</div>
          <input className={styles.rightBlockInput} value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Вставьте содержимое отзыва' />
          <input className={styles.rightBlockInput} value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Вставьте автора' />
          <div className={styles.rightBlockContinue} onClick={addReview}>Добавить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ReviewListControl);