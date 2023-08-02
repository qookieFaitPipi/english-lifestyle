import React from 'react';
import styles from './SliderItem.module.scss';

type sliderItemType = {
  id: number,
  image_url: string,
  content: string,
}

const SliderItem: React.FC<sliderItemType> = ({image_url, content}) => {
  return (
    <div className={styles.sliderItem}>
      <div className={styles.sliderItemContent}>
        <div className={styles.sliderItemImageBlock}>
          <img className={styles.sliderItemImage} src={image_url} alt="sliderItem" />
        </div>
        <div className={styles.sliderItemTextBlock}>
          <div className={styles.sliderItemText}>{content}</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SliderItem);