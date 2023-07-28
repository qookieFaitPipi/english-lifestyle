import React, { useState } from 'react';
import styles from './RecordModal.module.scss';

interface LessonRecordProps {
  recordModalActive: boolean,
  setRecordModalActive: Function
}
const RecordModal: React.FC<LessonRecordProps> = ({recordModalActive, setRecordModalActive}) => {
  const [userName, serUserName] = useState<string>('');
  const [userEmail, serUserEmail] = useState<string>('');
  const [userTel, serUserTel] = useState<string>('');

  const send = () => {

  }

  return (
    <div className={recordModalActive ? styles.recordModal : styles.disable} onClick={() => setRecordModalActive(false)}>
      <div className={styles.recordModalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.recordModalTopBlock}>
          <div className={styles.recordModalTitle}>Записаться</div>
          <div className={styles.recordModalDart} onClick={() => setRecordModalActive(false)}>&times;</div>
        </div>
        <div className={styles.recordModalMainBlock}>
          <input className={styles.recordInput} value={userName} onChange={e => serUserName(e.target.value)} placeholder='Имя' type="text" />
          <input className={styles.recordInput} value={userEmail} onChange={e => serUserEmail(e.target.value)} placeholder='Email' type="text" />
          <input className={styles.recordInput} value={userTel} onChange={e => serUserTel(e.target.value)} placeholder='Номер телефона' type="text" />
          <div className={styles.entryContinueInput} onClick={send}>Отправить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(RecordModal);