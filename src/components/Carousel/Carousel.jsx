import styles from './carousel.module.scss';

import leftArrow from '../../assets/img/leftArrow.svg';
import rightArrow from '../../assets/img/rightArrow.svg';
import { useState } from 'react';

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  function handleClick(e) {
    if (e == 'left') {
      if (index == 0) {
        setIndex(pictures.length - 1);
      } else {
        setIndex((index) => index - 1);
      }
      return;
    }
    if (index + 1 == pictures.length) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  }

  return (
    <section className={styles.carousel}>
      <img
        className={styles.carousel__image}
        src={pictures[index]}
        alt="A photo of the logement."
      />
      <img
        onClick={(e) => handleClick('left')}
        className={styles.carousel__leftArrow}
        src={leftArrow}
        alt="Control arrow left"
      />
      <img
        onClick={(e) => handleClick('right')}
        className={styles.carousel__rightArrow}
        src={rightArrow}
        alt="Control arrow right"
      />
    </section>
  );
}

export default Carousel;
