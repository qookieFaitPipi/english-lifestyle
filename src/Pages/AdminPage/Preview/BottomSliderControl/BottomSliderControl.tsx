import React, {useState} from 'react';
import styles from './BottomSliderControl.module.scss';
import axios from 'axios';

// components
import BottomSlider from '../../../IndexPage/BottomSlider/BottomSlider';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteBottomSliderItem, addBottomSliderItem } from '../../../../redux/slices/sliderSlice';

const BottomSliderControl: React.FC = () => {
  const [controlDelNum, setControlDelNum] = useState<string>('');
  const [controlFile, setControlFile] = useState<any>();
  const [controlContent, setControlContent] = useState('');
  const dispatch = useDispatch();

  const {accessToken} = useSelector((state: any) => state.userSlice);

  const addItem = () => {
    setControlContent('');

    const form_data = new FormData();
    form_data.append('file', controlFile);
    form_data.append('image_url', controlFile.name);

    try {
      axios.post('https://admin.english-lifestyle.ru/admin/api/add_image', form_data, {headers: { Authorization: 'Bearer ' + accessToken.access_token }}).then((res) => {
        dispatch(addBottomSliderItem({id: -1, image_url: 'https://admin.english-lifestyle.ru/api/image/' + controlFile.name, content: controlContent}))
      });
    } catch(err) {
      console.log(err);
    }
  }

  const deleteItem = () => {
    dispatch(deleteBottomSliderItem(controlDelNum));
    setControlDelNum('');
  }
  return (
    <div className={styles.control}>
      <BottomSlider />
      
      <div className={styles.controlTitle}>ControlPart</div>
      <div className={styles.controlContent}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockTitle}>Удаление элемента</div>
          <input className={styles.leftBlockInput} value={controlDelNum} onChange={(e) => setControlDelNum(e.target.value)} placeholder='Введите номер отзыва' type="text" />
          <div className={styles.leftBlockContinue} onClick={deleteItem}>Удалить по номеру</div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.rightBlockTitle}>Добавление элемента</div>
          <input className={styles.rightBlockInput} onChange={(e: any) => setControlFile(e.target.files[0])} type="file" />
          <input className={styles.rightBlockInput} value={controlContent} onChange={(e) => setControlContent(e.target.value)} type="text" placeholder='Введите подпись' />
          <div className={styles.rightBlockContinue} onClick={addItem}>Добавить</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(BottomSliderControl);