import React, { useState } from 'react';
import styles from './ReviewList.module.scss';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import ReviewItem from './ReviewItem/ReviewItem';

interface IReviewItem {
  id: number,
  text: string,
  author: string
}

const ReviewList: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [review, setReview] = useState<IReviewItem[]>([
    {
      id: 1,
      text: 'Когда мы начали заниматься в онлайн школе English Life Style, у нас уже были базовые знания английского языка. За полгода преподаватель подготовил нас к сдаче IELTS. Мы успешно сдали экзамен в Турции и сейчас живем и работаем в Канаде.',
      author: 'Сергей и Виктория'
    },
    {
      id: 2,
      text: 'Я – врач, и мне нужно было подтянуть свой уровень разговорного английского до Upper-Intermediate. Курс, предложенный преподавателем, мне идеально подошел. Большую часть урока мы разговаривали на английском, но также изучали грамматику, новые слова, уроки были интерактивными с заданиями на аудирование. Сейчас я работаю по контракту в ОАЭ. Спасибо English Life Style.',
      author: 'Оксана'
    }
    ,    
    {
      id: 3,
      text: 'Всем доброго времени суток! Три месяца назад обратилась в эту школу, решила начать учить английский язык, так сказать эта мысль давно меня не оставляла…)) Хочу сказать, что знание английского у меня на 0 уровне, к сожалению в школьном возрасте распределили на другой иностранный язык. Самостоятельно пыталась изучать (ведь на сегодняшний день есть много бесплатных уроков на разных каналах интернета), но это привело только к запоминанию английских слов и все! Фразы, произношение и составление предложений не сдвигались с места. Обратившись в эту школу, у меня спустя уже несколько месяцев появились результаты… Я начала понимать смысл предложений, у меня улучшилось произношение и могу дать ответы на задаваемые вопросы!) Это круто!',
      author: 'Юлия'
    },
  ])

  return (
    <div className={styles.reviewList}>
      <div className={styles.reviewListContent}>
        <div className={styles.reviewListTitleBlock}>
          <div className={styles.reviewListTitle}>ОТЗЫВЫ</div>
        </div>
        <Carousel responsive={responsive} className={styles.sliderList}>
          {review.map((obj:any) => 
            <ReviewItem 
              key={obj.id}
              id={obj.id} 
              text={obj.text} 
              author={obj.author} 
            />
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default React.memo(ReviewList);