import React, {useEffect} from 'react';
import styles from './BottomSlider.module.scss';
import axios from 'axios';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import SliderItem from '../../../Universal/SliderItem/SliderItem';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBottomSliderState } from '../../../redux/slices/sliderSlice';

// types
import { SliderItemType } from '../../../@types/types';

const BottomSlider: React.FC = () => {
  const {bottomSliderList} = useSelector((state: any) => state.sliderSlice);
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
    axios.get('https://admin.english-lifestyle.ru/api/get_bottom_slider').then((response) => {
      dispatch(setBottomSliderState(response.data))
    });
  }, [])

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        <div className={styles.sliderTitleBlock}>
          <div className={styles.sliderSupTitle}>Без английского Вы не сможете</div>
        </div>
        <Carousel responsive={responsive} className={styles.sliderList}>
          {bottomSliderList.map((obj : SliderItemType) =>
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

export default React.memo(BottomSlider);