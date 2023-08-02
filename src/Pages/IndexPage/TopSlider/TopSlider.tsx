import React, { useEffect } from 'react';
import styles from './TopSlider.module.scss';
import axios from 'axios';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import SliderItem from '../../../Universal/SliderItem/SliderItem';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTopSliderState } from '../../../redux/slices/sliderSlice';

type sliderItemType = {
  id: number,
  image_url: string,
  content: string,
}

const TopSlider = () => {
  const {topSliderList} = useSelector((state: any) => state.sliderSlice);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
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

  useEffect(() => {
    axios.get('https://admin.english-lifestyle.ru/api/get_top_slider').then((response) => {
      dispatch(setTopSliderState(response.data))
    });
  }, [])

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTitleBlock}>
        <div className={styles.sliderTitle}>ПОЧЕМУ ИЗУЧЕНИЕ АНГЛИЙСКОГО <br /> ТАК ВАЖНО ДЛЯ ИММИГРАЦИИ</div>
        <div className={styles.sliderSupTitle}>С английским языком Вы сможете</div>
      </div>
      <div className={styles.sliderContent}>
        <Carousel responsive={responsive} className={styles.sliderList}>
          {topSliderList.map((obj : sliderItemType) =>
            <SliderItem 
              key={obj.id} 
              id={obj.id} 
              image_url={obj.image_url} 
              content={obj.content} 
            />
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default React.memo(TopSlider);