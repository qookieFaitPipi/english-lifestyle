import React from 'react';
import styles from './ReviewItem.module.scss';

type reviewItemType = {
  id: number;
  content: string;
  author: string; 
}

const ReviewItem: React.FC<reviewItemType> = ({content, author}) => {
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