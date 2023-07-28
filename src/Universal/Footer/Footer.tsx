import React from 'react';
import styles from './Footer.module.scss';

interface LessonRecordProps {
  recordModalActive: boolean,
  setRecordModalActive: Function
}

const Footer: React.FC<LessonRecordProps> = ({recordModalActive, setRecordModalActive}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeftColumn}>
          <div className={styles.footerTitleBlock}>
            <div className={styles.footerTitle}>ХОЧЕШЬ ТАК ЖЕ? <br /> ЗАПИШИСЬ НА КУРС ПРЯМО СЕЙЧАС!</div>
          </div>
          <div className={styles.footerRecordFeedBlock}>
            <div className={styles.footerRecordFeedText} onClick={() => setRecordModalActive(!recordModalActive)}>Записаться</div>
          </div>
        </div>
        <div className={styles.footerRightColumn}>
          <div className={styles.footerContactBlock}>
            <a href='tel:+79036164615' className={styles.footerInfoTel}>+7 903 616 46 15</a>
            <div className={styles.footerInfoTel}>info@english-lifestyle.ru</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);