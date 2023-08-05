import React from 'react';
import styles from './About.module.scss';

import laptop from './../../../Assets/images/laptop.png';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutInfo}>
          <div className={styles.aboutTitleBlock}>
            <div className={styles.aboutTitle}>Интерактивная платформа, доступная всем!</div>
            <div className={styles.aboutSupTitle}>Как она работает?</div>
          </div>
          <div className={styles.aboutListBlock}>
            <div className={styles.aboutListItem}>
              📝Все учебные материалы доступны в одном месте;
            </div>
            <div className={styles.aboutListItem}>
              📚Вам не нужно покупать печатные учебники или скачивать электронные учебники;
            </div>
            <div className={styles.aboutListItem}>
              📊Автоматическая проверка домашних заданий в реальном времени;
            </div>
            <div className={styles.aboutListItem}>
              📹Высокое качество изображения, аудио и видео конференциях
            </div>
            <div className={styles.aboutListItem}>
              📈Вы сможете увидеть свой прогресс в личном кабинете
            </div>
          </div>
        </div>
        <div className={styles.aboutImageBlock}>
          <img className={styles.aboutImage} src={laptop} alt="" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(About);