import React from 'react';
import styles from './EducationSteps.module.scss';

const EducationSpets = () => {
  return (
    <div className={styles.education}>
      <div className={styles.educationContent}>
        <div className={styles.educationLeftBlock}>
          <iframe width="360" height="615" src="https://www.youtube.com/embed/jNQXAC9IVRw" allow="autoplay; encrypted-media" />
        </div>
        <div className={styles.educationRightBlock}>
          <div className={styles.educationTitleBlock}>
            <div className={styles.educationTitle}>Как проходит обучение?</div>
          </div>
          <div className={styles.educationStepBlock}>
            <div className={styles.educationStepTitle}>1.Пробное занятие.</div>
            <div className={styles.educationStepText}>На пробном бесплатном занятии методист определит ваш уровень владения английским языком и предложит подходящий именно Вам курс. Число уроков в неделю и время занятий Вы тоже выбираете на первом занятии, и исходя из целей, которых Вы хотите достичь.</div>
          </div>
          <div className={styles.educationStepBlock}>
            <div className={styles.educationStepTitle}>2.Последующие занятия.</div>
            <div className={styles.educationStepText}>На уроках 80% учебного времени Вы будете говорить по-английски. Занятия прохоядят на интерактивной платформе, где Вы сможете увидеть свой прогресс.</div>
          </div>
          <div className={styles.educationStepBlock}>
            <div className={styles.educationStepTitle}>3.Домашние задания.</div>
            <div className={styles.educationStepText}>Вы будете выполнять домашнее задание, что необходимо для закрепления пройденного на уроке материала.</div>
          </div>
          <div className={styles.educationStepBlock}>
            <div className={styles.educationStepTitle}>4.Результаты.</div>
            <div className={styles.educationStepText}>Через полгода (6 месяцев) вы сможете выйти на новый уровень владения английским языком!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(EducationSpets);