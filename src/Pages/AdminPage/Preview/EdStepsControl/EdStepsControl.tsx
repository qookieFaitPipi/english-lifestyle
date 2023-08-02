import React from 'react';
import styles from './EdStepsControl.module.scss';

// components
import EducationSpets from '../../../IndexPage/EducationSteps/EducationSteps';

const EdStepsControl = () => {
  const uploadVideo = () => {

  }

  return (
    <div className={styles.edStepsControl}>
      <EducationSpets />
      <input className={styles.edStepsControlInput} type="text" />
      <div className={styles.edStepsControlUpload}>Загрузить новое видео</div>
      <div className={styles.edStepsControlSave}>Загрузить новое видео</div>
    </div>
  )
}

export default React.memo(EdStepsControl);