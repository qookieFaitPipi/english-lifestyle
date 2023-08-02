import React from 'react';
import styles from './Navbar.module.scss';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSelectedSlice, logout } from '../../../redux/slices/adminSlice';

const Navbar = () => {
  const {selectedSlice} = useSelector((state: any) => state.adminSlice);
  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarTitleBlock}>
          <div className={styles.navbarTitle}>Admin-panel</div>
        </div>
        <div className={styles.navbarTextBlock}>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(0))}>topSlider</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(1))}>bottomSlider</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(2))}>reviewList</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(3))}>priceList</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(4))}>video</div>
          <div className={styles.navbarText} onClick={() => dispatch(logout())}>logout</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Navbar);