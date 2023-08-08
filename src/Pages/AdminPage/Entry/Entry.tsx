import React, { useState } from 'react';
import styles from './Entry.module.scss';
import axios from 'axios';

// react-router-dom
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/slices/userSlice';

const Entry: React.FC = () => {
  const [userLogin, serUserLogin] = useState<string>('');
  const [userPassword, serUserPassword] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEntry = async() => {
    const userData = {
      'login': userLogin,
      'password': userPassword
    }
    try {
      await axios.post('https://admin.english-lifestyle.ru/admin/api/login', userData).then((res) => {
        dispatch(login({
          userLogin: userLogin,
          isEntered: true,
          accessToken: res.data
        }))
      })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.entry}>
      <div className={styles.entryContent} onClick={e => e.stopPropagation()}>
        <div className={styles.entryTopBlock}>
          <div className={styles.entryTitle}>Вход</div>
          <div className={styles.entryDart} onClick={() => navigate('/')}>&times;</div>
        </div>
        <div className={styles.entryMainBlock}>
          <input className={styles.entryInput} value={userLogin} onChange={e => serUserLogin(e.target.value)} placeholder='login' type="text" />
          <input className={styles.entryInput} value={userPassword} onChange={e => serUserPassword(e.target.value)} placeholder='password' type="password" />
          <div className={styles.entryContinueInput} onClick={userEntry}>Войти</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Entry);