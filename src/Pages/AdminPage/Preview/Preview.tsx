import React from 'react';
import styles from './Preview.module.scss';

// redux
import { useSelector } from 'react-redux';

// components
import StudyStepsControl from './StudyStepsControl/StudyStepsControl';
import ReviewListControl from './ReviewListControl/ReviewListControl';
import TopSliderControl from './TopSliderControl/TopSliderControl';
import BottomSliderControl from './BottomSliderControl/BottomSliderControl';
import PriceListControl from './PriceListControl/PriceListControl';

const Preview: React.FC = () => {
  const {selectedSlice} = useSelector((state: any) => state.userSlice);

  return (
    <div className={styles.preview}>
      <div className={styles.previewContent}>
        {selectedSlice === 0 ? <TopSliderControl /> : selectedSlice === 1 ? <BottomSliderControl /> : selectedSlice === 2 ? <ReviewListControl /> : selectedSlice === 3 ? <PriceListControl /> : selectedSlice === 4 ? <StudyStepsControl /> : <div>null</div>}
      </div>
    </div>
  )
}

export default React.memo(Preview);