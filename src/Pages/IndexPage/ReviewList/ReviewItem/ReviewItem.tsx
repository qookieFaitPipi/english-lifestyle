import React from 'react';
import styles from './ReviewItem.module.scss';

interface IReviewItem {
  id: number,
  text: string,
  author: string
}

const ReviewItem: React.FC<IReviewItem> = ({text, author}) => {
  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewItemContent}>
        <div className={styles.reviewItemText}>{text}</div>
        <div className={styles.reviewItemAuthor}>{author}</div>
      </div>
    </div>
  )
}

export default React.memo(ReviewItem);