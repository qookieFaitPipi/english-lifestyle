import React from 'react';
import styles from './Preview.module.scss';

// redux
import { useSelector } from 'react-redux';

// components
import TopSlider from '../../IndexPage/TopSlider/TopSlider';
import BottomSlider from '../../IndexPage/BottomSlider/BottomSlider';
import ReviewList from '../../IndexPage/ReviewList/ReviewList';
import PriceList from '../../IndexPage/PriceList/PriceList';
import EducationSteps from '../../IndexPage/StudySteps/StudySteps';


import EdStepsControl from './EdStepsControl/EdStepsControl';
import ReviewListControl from './ReviewListControl/ReviewListControl';
import TopSliderControl from './TopSliderControl/TopSliderControl';
import PriceListControl from './PriceListControl/PriceListControl';

const Preview = () => {
  const {selectedSlice} = useSelector((state: any) => state.adminSlice);



  return (
    <div className={styles.preview}>
      <div className={styles.previewContent}>
        {selectedSlice === 0 ? <TopSliderControl /> : selectedSlice === 1 ? <BottomSlider /> : selectedSlice === 2 ? <ReviewListControl /> : selectedSlice === 3 ? <PriceListControl /> : selectedSlice === 4 ? <EdStepsControl /> : <div>null</div>}
      </div>
    </div>
  )
}

export default React.memo(Preview);