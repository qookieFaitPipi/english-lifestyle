import React from 'react';
import styles from './LessonRecord.module.scss';

// react-router-dom
import { Link } from 'react-router-dom';

// images
import study from './../../../Assets/images/study.jpg';

const LessonRecord: React.FC = () => {
  return (
    <div className={styles.lessonRecord}>
      <div className={styles.lessonRecordContent}>
        <div className={styles.lessonRecordLeftBlock}>
          <div className={styles.lessonRecordTitle}>Зажги знания английского и погаси ярость!</div>
          <div className={styles.lessonRecordText}>Испытываешь ярость от провальных <br /> попыток выучить английскии язык?</div>
          <div className={styles.lessonRecordText}>Запишись в школу <br />  английского языка English Life Style</div>
          <a href='https://wa.me/79036164615' className={styles.lessonRecordInput}>Записаться</a>
        </div>
        <div className={styles.lessonRecordRightBlock}>
          <img className={styles.lessonRecordImage} src={study} alt="study" />
        </div>  
      </div>
    </div>
  )
}

export default React.memo(LessonRecord);