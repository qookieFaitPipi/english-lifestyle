import React from 'react';
import styles from './SliderItem.module.scss';

interface ISlider {
  id: number,
  imageURL: string,
  text: string,
}

const SliderItem: React.FC<ISlider> = ({id, imageURL, text}) => {
  return (
    <div className={styles.sliderItem}>
      <div className={styles.sliderItemContent}>
        <div className={styles.sliderItemImageBlock}>
          <img className={styles.sliderItemImage} src={imageURL} alt="" />
        </div>
        <div className={styles.sliderItemTextBlock}>
          <div className={styles.sliderItemText}>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SliderItem);