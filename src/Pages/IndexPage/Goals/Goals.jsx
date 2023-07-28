import React from 'react';
import styles from './Goals.module.scss';

// images
import earth from './../../../Assets/images/earth.jpg';
import cap from './../../../Assets/images/cap.jpg';
import boy from './../../../Assets/images/boy.jpg';

import leftArrow from './../../../Assets/images/arrows/left-arrow.png';
import rightArrow from './../../../Assets/images/arrows/right-arrow.png';

const CourseFor = () => {
  return (
    <div className={styles.goals}>
      <div className={styles.goalsContent}>
        <div className={styles.goalsTitleBlock}>
          <div className={styles.goalsTitle}>ДЛЯ КОГО НАШИ ОНЛАЙН-КУРСЫ?</div>
        </div>
        <div className={styles.goalsItem} style={{justifyContent: 'start', margin: '0px 0px 40px 40px'}}>
          <div className={styles.goalsImageBlock}>
            <img className={styles.goalsImage} src={earth} alt="earth" />
          </div>
          <div className={styles.goalsTextBlock}>
            <div className={styles.goalsText}>Тому, кто хочет <br /> переехать в <br /> англоговоряшие <br /> страны</div>
          </div>
          <div className={styles.goalsArrowBlock}>
            <img className={styles.goalsArrow} src={rightArrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.goalsItem} style={{justifyContent: 'end', margin: '40px'}}>
          <div className={styles.goalsArrowBlock} style={{marginRight: '80px'}}>
            <img className={styles.goalsArrow} src={leftArrow} alt="arrow" />
          </div>
          <div className={styles.goalsTextBlock}>
            <div className={styles.goalsText} style={{textAlign: 'end'}}>Тому, кто хочет <br /> получить <br /> образование <br /> за рубежом</div>
          </div>
          <div className={styles.goalsImageBlock}>
            <img className={styles.goalsImage} src={cap} alt="earth" />
          </div>
        </div>
        <div className={styles.goalsItem} style={{justifyContent: 'start', margin: '0px 0px 40px 40px'}}>
          <div className={styles.goalsImageBlock}>
            <img className={styles.goalsImage} src={boy} alt="earth" />
          </div>
          <div className={styles.goalsTextBlock}>
            <div className={styles.goalsText}>Тому, кто уже <br /> переехал, <br /> но не уверен <br /> в языке</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default React.memo(CourseFor);