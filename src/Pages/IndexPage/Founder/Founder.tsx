import React from 'react';
import styles from './Founder.module.scss';

// images
import photo from './../../../Assets/images/photo.jpg';

const Leader = () => {
  return (
    <div className={styles.founder}>
      <div className={styles.founderTitleBlock}>
        <div className={styles.founderTitle}>ОБ ОСНОВАТЕЛЕ ШКОЛЫ ENGLISH LIFE STYLE</div>
      </div>
      <div className={styles.founderContent}>
        <div className={styles.founderInfoBlock}>
          <div className={styles.founderInfoText}>Светлана Владимировна Белялова – дипломированный специалист в области лингвистики и межкультурной коммуникации. Стаж работы переводчиком с 2002 года.</div>
          <div className={styles.founderInfoText}>&bull;Ведущий переводчик ИНО-ТАСС <br /> ИТАР-ТАСС с 2002 по 2004 год.</div>
          <div className={styles.founderInfoText}>&bull;Заместитель начальника отдела переговоров <br /> РИА-НОВОСТИ с 2004 по 2010 год.</div>
          <div className={styles.founderInfoText}>Преподавательский стаж с 2010 года.</div>
          <div className={styles.founderInfoText}>&bull;Обладатель 10 сертификатов Coursera в сфере обучения <br /> принципам преподавания английского языка.</div>
          <div className={styles.founderInfoText}>&bull;Уровень владения английским языком CEFR – C1</div>
          <div className={styles.founderInfoText}>В 2014 году Светлана основала школу английского языка English Life Style, которая стала центром по подготовке к международным экзаменам компании Pearson и Cambridge. Каждый год ученики школы успешно сдают экзамены.</div>
        </div>
        <div className={styles.founderImageBlock}>
          <img className={styles.founderImage} src={photo} alt="" />
          <div className={styles.founderImageText}>Основатель школы <br /> Светлана Белялова</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Leader);