import React from 'react';
import styles from './LessonRecord.module.scss';

// images
import study from './../../../Assets/images/study.jpg';

const LessonRecord: React.FC = () => {
  return (
    <div className={styles.lessonRecord}>
      <div className={styles.lessonRecordContent}>
        <div className={styles.lessonRecordLeftBlock}>
          <div className={styles.lessonRecordTitle}>Английский для иммиграции</div>
          <div className={styles.lessonRecordText}>Курсы общего и специального английского в онлайн школе English Life Style</div>
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