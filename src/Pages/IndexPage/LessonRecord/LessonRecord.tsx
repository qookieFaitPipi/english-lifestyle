import React from 'react';
import styles from './LessonRecord.module.scss';

// images
import study from './../../../Assets/images/study.jpg';

interface LessonRecordProps {
  recordModalActive: boolean,
  setRecordModalActive: Function
}

const LessonRecord: React.FC<LessonRecordProps> = ({recordModalActive, setRecordModalActive}) => {
  return (
    <div className={styles.lessonRecord}>
      <div className={styles.lessonRecordContent}>
        <div className={styles.lessonRecordLeftBlock}>
          <div className={styles.lessonRecordTitle}>Зажги знания английского <br /> и погаси ярость!</div>
          <div className={styles.lessonRecordText}>Испытываешь ярость от провальных <br /> попыток выучить английскии язык?</div>
          <div className={styles.lessonRecordText}>Запишись в школу <br />  английского языка English Life Style</div>
          <div className={styles.lessonRecordInput} onClick={() => setRecordModalActive(!recordModalActive)}>Записаться</div>
        </div>
        <div className={styles.lessonRecordRightBlock}>
          <img className={styles.lessonRecordImage} src={study} alt="study" />
        </div>  
      </div>
    </div>
  )
}

export default React.memo(LessonRecord);