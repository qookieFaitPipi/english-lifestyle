import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeftColumn}>
          <div className={styles.footerTitleBlock}>
            <div className={styles.footerTitle}>ХОЧЕШЬ ТАК ЖЕ? <br /> ЗАПИШИСЬ НА КУРС ПРЯМО СЕЙЧАС!</div>
          </div>
          <div className={styles.footerRecordFeedBlock}>
            <a href='https://wa.me/79036164615' className={styles.footerRecordFeedText}>Записаться</a>
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