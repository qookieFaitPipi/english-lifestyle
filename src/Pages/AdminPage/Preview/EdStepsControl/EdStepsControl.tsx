import React, { useState } from 'react';
import styles from './EdStepsControl.module.scss';

// components
import EducationSpets from '../../../IndexPage/StudySteps/StudySteps';

// redux
import { useDispatch } from 'react-redux';
import { setVideoState } from '../../../../redux/slices/videoSlice';

const EdStepsControl = () => {
  const [link, setLink] = useState('');
  const dispatch = useDispatch();

  const uploadVideo = () => {
    dispatch(setVideoState(link));
    setLink('');
  }

  return (
    <div className={styles.control}>
      <EducationSpets />
      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <input className={styles.controlLinkInput} onChange={(e) => setLink(e.target.value)} placeholder='Вставьте ссылку' type="text" />
        <div className={styles.cntrolUploadInput} onClick={uploadVideo}>Загрузить видео</div>
      </div>
    </div>
  )
}

export default React.memo(EdStepsControl);