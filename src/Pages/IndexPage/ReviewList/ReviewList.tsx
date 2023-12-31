import React, { useEffect } from 'react';
import styles from './ReviewList.module.scss';
import axios from 'axios';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import ReviewItem from './ReviewItem/ReviewItem';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setReviewsState } from '../../../redux/slices/reviewSlice';

// types
import { ReviewItemType } from '../../../@types/types';

const ReviewList: React.FC = () => {
  const {reviewList} = useSelector((state: any) => state.reviewSlice);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
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

  useEffect(() => {
    axios.get('https://admin.english-lifestyle.ru/api/get_reviews').then((response) => {
      dispatch(setReviewsState(response.data))
    });
  }, [])

  return (
    <div className={styles.reviewList}>
      <div className={styles.reviewListContent}>
        <div className={styles.reviewListTitleBlock}>
          <div className={styles.reviewListTitle}>ОТЗЫВЫ</div>
        </div>
        <Carousel responsive={responsive} className={styles.sliderList}>
          {reviewList.map((obj: ReviewItemType) => 
            <ReviewItem 
              key={obj.id}
              id={obj.id} 
              content={obj.content} 
              author={obj.author} 
            />
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default React.memo(ReviewList);