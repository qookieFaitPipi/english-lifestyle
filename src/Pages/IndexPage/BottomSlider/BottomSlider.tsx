import React, {useState} from 'react';
import styles from './BottomSlider.module.scss';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import SliderItem from '../../../Universal/SliderItem/SliderItem';

// images
import img1 from './../../../Assets/images/slider/img1.png';

interface ISlider {
  id: number,
  imageURL: string,
  text: string,
}

const BottomSlider = () => {
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

  const [bottomSliderItems, setBottomSliderItems] = useState<ISlider[]>([
    {
      id: 1,
      imageURL: img1,
      text: 'Cоставить свое резюме'
    },
    {
      id: 2,
      imageURL: img1,
      text: 'Cоставить свое резюме'
    },
    {
      id: 3,
      imageURL: img1,
      text: 'Cоставить свое резюме'
    },
  ])

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        <div className={styles.sliderTitleBlock}>
          <div className={styles.sliderSupTitle}>Без английского Вы не сможете</div>
        </div>
        <Carousel responsive={responsive} className={styles.sliderList}>
          {bottomSliderItems.map(obj =>
            <SliderItem 
              key={obj.id} 
              id={obj.id} 
              imageURL={obj.imageURL} 
              text={obj.text} 
            />
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default React.memo(BottomSlider);