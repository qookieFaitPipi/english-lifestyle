import React from 'react';
import styles from './SliderItem.module.scss';

// types
import { SliderItemType } from '../../@types/types';

const SliderItem: React.FC<SliderItemType> = ({image_url, content}) => {
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