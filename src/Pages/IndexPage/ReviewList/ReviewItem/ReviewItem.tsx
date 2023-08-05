import React from 'react';
import styles from './ReviewItem.module.scss';

// types 
import { ReviewItemType } from '../../../../@types/types';

const ReviewItem: React.FC<ReviewItemType> = ({content, author}) => {
  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewItemContent}>
        <div className={styles.reviewItemText}>{content}</div>
        <div className={styles.reviewItemAuthor}>{author}</div>
      </div>
    </div>
  )
}

export default React.memo(ReviewItem);