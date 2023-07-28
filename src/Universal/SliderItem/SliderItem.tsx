import React from 'react';
import styles from './SliderItem.module.scss';

// images
import img1 from './../../Assets/images/slider/img1.png';

interface ISlider {
  id: number,
  imageURL: string,
  text: string,
}

const SliderItem: React.FC<ISlider> = () => {
  return (
    <div className={styles.sliderItem}>
      <div className={styles.sliderItemContent}>
        <div className={styles.sliderItemImageBlock}>
          <img className={styles.sliderItemImage} src={img1} alt="" />
        </div>
        <div className={styles.sliderItemTextBlock}>
          <div className={styles.sliderItemText}>Составить своё резюме</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SliderItem);