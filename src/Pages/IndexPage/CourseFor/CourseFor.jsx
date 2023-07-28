import React from 'react';
import styles from './CourseFor.module.scss';

// images
import earth from './../../../Assets/images/earth.jpg';
import cap from './../../../Assets/images/cap.jpg';
import boy from './../../../Assets/images/boy.jpg';

import leftArrow from './../../../Assets/images/arrows/left-arrow.png';
import rightArrow from './../../../Assets/images/arrows/right-arrow.png';

const CourseFor = () => {
  return (
    <div className={styles.courseFor}>
      <div className={styles.courseForContent}>
        <div className={styles.courseForTitleBlock}>
          <div className={styles.courseForTitle}>ДЛЯ КОГО НАШИ ОНЛАЙН-КУРСЫ?</div>
        </div>
        <div className={styles.courseForItem} style={{justifyContent: 'start', margin: '0px 0px 40px 40px'}}>
          <div className={styles.courseForImageBlock}>
            <img className={styles.courseForImage} src={earth} alt="earth" />
          </div>
          <div className={styles.courseForTextBlock}>
            <div className={styles.courseForText}>Тому, кто хочет <br /> переехать в <br /> англоговоряшие <br /> страны</div>
          </div>
          <div className={styles.courseForArrowBlock}>
            <img className={styles.courseForArrow} src={rightArrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.courseForItem} style={{justifyContent: 'end', margin: '40px'}}>
          <div className={styles.courseForArrowBlock}>
            <img className={styles.courseForArrow} src={leftArrow} alt="arrow" />
          </div>
          <div className={styles.courseForTextBlock}>
            <div className={styles.courseForText} style={{textAlign: 'end', marginLeft: '80px'}}>Тому, кто хочет <br /> получить <br /> образование <br /> за рубежом</div>
          </div>
          <div className={styles.courseForImageBlock}>
            <img className={styles.courseForImage} src={cap} alt="earth" />
          </div>
        </div>
        <div className={styles.courseForItem} style={{justifyContent: 'start', margin: '0px 0px 40px 40px'}}>
          <div className={styles.courseForImageBlock}>
            <img className={styles.courseForImage} src={boy} alt="earth" />
          </div>
          <div className={styles.courseForTextBlock}>
            <div className={styles.courseForText}>Тому, кто уже <br /> переехал, <br /> но не уверен <br /> в языке</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default React.memo(CourseFor);