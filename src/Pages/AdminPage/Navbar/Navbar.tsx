import React from 'react';
import styles from './Navbar.module.scss';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSlice, logout } from '../../../redux/slices/userSlice';

const Navbar: React.FC = () => {
  const {accessToken, selectedSlice} = useSelector((state: any) => state.userSlice);

  // video
  const {url} = useSelector((state: any) => state.videoSlice);
  const {reviewList} = useSelector((state: any) => state.reviewSlice);
  const {state1, state2, state3} = useSelector((state: any) => state.priceSlice);
  const {topSliderList, bottomSliderList} = useSelector((state: any) => state.sliderSlice);
  
  const dispatch = useDispatch();

  const uploadData = async() => {
    if(selectedSlice === 4) {
      try {
        axios.post('https://admin.english-lifestyle.ru/admin/api/set_video', {'url': url}, {headers: { Authorization: 'Bearer ' + accessToken.access_token }});
      } catch(err) {
        console.log(err);
      }
    } else if(selectedSlice === 2) {
      try {
        axios.post('https://admin.english-lifestyle.ru/admin/api/update_reviews', reviewList, {headers: { Authorization: 'Bearer ' + accessToken.access_token }});
      } catch(err) {
        console.log(err);
      }
    } else if(selectedSlice === 0) {
      try {
        axios.post('https://admin.english-lifestyle.ru/admin/api/update_top_slider', topSliderList, {headers: { Authorization: 'Bearer ' + accessToken.access_token }});
      } catch(err) {
        console.log(err);
      }
    } else if(selectedSlice === 1) {
      try {
        axios.post('https://admin.english-lifestyle.ru/admin/api/update_bottom_slider', bottomSliderList, {headers: { Authorization: 'Bearer ' + accessToken.access_token }});
      } catch(err) {
        console.log(err);
      }
    } else if(selectedSlice === 3) {
      const userData = [state1, state2, state3];
      try {
        axios.post('https://admin.english-lifestyle.ru/admin/api/update_price_lists', userData, {headers: { Authorization: 'Bearer ' + accessToken.access_token }});
      } catch(err) {
        console.log(err);
      }
    }
  }


  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarTextBlock}>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(0))}>topSlider</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(1))}>bottomSlider</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(2))}>reviewList</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(3))}>priceList</div>
          <div className={styles.navbarText} onClick={() => dispatch(setSelectedSlice(4))}>video</div>
        </div>
        <div className={styles.navbarTextBlock}>
          <div className={styles.navbarText} onClick={() => dispatch(logout())}>logout</div>
          <div className={styles.navbarText} onClick={uploadData}>Сохранить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Navbar);