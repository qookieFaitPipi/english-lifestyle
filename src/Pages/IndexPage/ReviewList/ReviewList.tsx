import React, { useState } from 'react';
import styles from './ReviewList.module.scss';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import ReviewItem from './ReviewItem/ReviewItem';

interface IReviewItem {
  id: number,
  text: string,
  author: string
}

const ReviewList: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [review, setReview] = useState<IReviewItem[]>([
    {
      id: 1,
      text: '"Начал заниматься английским с преподавателем Светланой "с нуля". В школе учил немецкий. За год я научился говорить и понимать разговорную речь на слух. Переехал в США и быстро нашел работу. Помогло резюме, составленное специалистами онлайн школы English Life Style"',
      author: 'Евгений'
    },
    {
      id: 3,
      text: '"Начал заниматься английским с преподавателем Светланой "с нуля". В школе учил немецкий. За год я научился говорить и понимать разговорную речь на слух. Переехал в США и быстро нашел работу. Помогло резюме, составленное специалистами онлайн школы English Life Style"',
      author: 'Евгений'
    }
    ,    {
      id: 2,
      text: '"Начал заниматься английским с преподавателем Светланой "с нуля". В школе учил немецкий. За год я научился говорить и понимать разговорную речь на слух. Переехал в США и быстро нашел работу. Помогло резюме, составленное специалистами онлайн школы English Life Style"',
      author: 'Евгений'
    },
    {
      id: 4,
      text: '"Начал заниматься английским с преподавателем Светланой "с нуля". В школе учил немецкий. За год я научился говорить и понимать разговорную речь на слух. Переехал в США и быстро нашел работу. Помогло резюме, составленное специалистами онлайн школы English Life Style"',
      author: 'Евгений'
    }
  ])

  return (
    <div className={styles.reviewList}>
      <div className={styles.reviewListContent}>
        <div className={styles.reviewListTitleBlock}>
          <div className={styles.reviewListTitle}>Отзывы</div>
        </div>
        <Carousel responsive={responsive} className={styles.sliderList}>
          {review.map((obj:any) => 
            <ReviewItem 
              key={obj.id}
              id={obj.id} 
              text={obj.text} 
              author={obj.author} 
            />
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default React.memo(ReviewList);