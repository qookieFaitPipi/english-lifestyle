import React from 'react';
import styles from './Advantages.module.scss';

const Advantages: React.FC = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantagesTitleBlock}>
        <div className={styles.advantagesTitle}>С НАМИ ВЫ</div>
      </div>
      <div className={styles.advantagesContent}>
        <div className={styles.advantagesColumn}>
          <div className={styles.advantagesItem}>
            <div className={styles.advantagesItemText}>Получите удовольствие от изучения английского</div>
          </div>
          <div className={styles.advantagesItem}>
            <div className={styles.advantagesItemText}>Подготовитесь к переезду за границу</div>
          </div>
          <div className={styles.advantagesItem}>
            <div className={styles.advantagesItemText}>Устроитесь на хорошую работу в другой стране</div>
          </div>
        </div>
        <div className={styles.advantagesColumn}>
          <div className={styles.advantagesItem}>
            <div className={styles.advantagesItemText}>Преодолеете языковой барьер без лишних усилий</div>
          </div>
          <div className={styles.advantagesItem}>
            <div className={styles.advantagesItemText}>Подготовитесь к сдаче международного экзамена на знание английского языка(TOEFL, IELTS, CAE)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Advantages);