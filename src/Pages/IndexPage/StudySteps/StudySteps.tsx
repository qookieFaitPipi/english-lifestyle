import React, { useEffect } from 'react';
import styles from './StudySteps.module.scss';
import axios from 'axios';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setVideoState } from '../../../redux/slices/videoSlice';

const EducationSpets: React.FC = () => {
  const {url} = useSelector((state: any) => state.videoSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://admin.english-lifestyle.ru/api/get_video').then((response) => {
      dispatch(setVideoState(response.data.url));
    });
  }, []);

  return (
    <div className={styles.education}>
      <div className={styles.educationContent}>
        <div className={styles.educationLeftBlock}>
          <iframe width="340" height="615" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
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