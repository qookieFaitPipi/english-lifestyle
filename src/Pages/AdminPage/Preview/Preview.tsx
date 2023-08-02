import React from 'react';
import styles from './Preview.module.scss';

// redux
import { useSelector } from 'react-redux';

// components
import TopSlider from '../../IndexPage/TopSlider/TopSlider';
import BottomSlider from '../../IndexPage/BottomSlider/BottomSlider';
import ReviewList from '../../IndexPage/ReviewList/ReviewList';
import PriceList from '../../IndexPage/PriceList/PriceList';
import EducationSteps from '../../IndexPage/EducationSteps/EducationSteps';


import EdStepsControl from './EdStepsControl/EdStepsControl';

const Preview = () => {
  const {selectedSlice} = useSelector((state: any) => state.adminSlice);



  return (
    <div className={styles.preview}>
      <div className={styles.previewContent}>
        {selectedSlice === 0 ? <TopSlider /> : selectedSlice === 1 ? <BottomSlider /> : selectedSlice === 2 ? <ReviewList /> : selectedSlice === 3 ? <PriceList /> : selectedSlice === 4 ? <><EdStepsControl /></> : <div>null</div>}
      </div>
    </div>
  )
}

export default React.memo(Preview);