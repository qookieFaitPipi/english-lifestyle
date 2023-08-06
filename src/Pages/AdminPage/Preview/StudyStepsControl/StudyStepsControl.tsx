import React, { useState } from 'react';
import styles from './StudyStepsControl.module.scss';

// components
import EducationSpets from '../../../IndexPage/StudySteps/StudySteps';

// redux
import { useDispatch } from 'react-redux';
import { setVideoState } from '../../../../redux/slices/videoSlice';

const StudyStepsControl: React.FC = () => {
  const [controlLink, setControlLink] = useState<string>('')
  const dispatch = useDispatch();

  const uploadVideo = () => {
    dispatch(setVideoState(controlLink));
    setControlLink('');
  }

  return (
    <div className={styles.control}>
      <EducationSpets />
      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <input className={styles.controlLinkInput} value={controlLink} onChange={(e) => setControlLink(e.target.value)} placeholder='Вставьте ссылку' type="text" />
        <div className={styles.cntrolUploadInput} onClick={uploadVideo}>Загрузить видео</div>
      </div>
    </div>
  )
}

export default React.memo(StudyStepsControl);