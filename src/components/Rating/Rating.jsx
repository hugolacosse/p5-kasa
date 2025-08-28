import styles from './rating.module.scss';

import whiteStarUrl from '../../assets/img/whitestar.svg';
import redStarUrl from '../../assets/img/redstar.svg';

function Rating({ value }) {
  const x = parseInt(value);

  return (
    <div className={styles.stars}>
      <img src={x >= 1 ? redStarUrl : whiteStarUrl} alt="Rating's star" />
      <img src={x >= 2 ? redStarUrl : whiteStarUrl} alt="Rating's star" />
      <img src={x >= 3 ? redStarUrl : whiteStarUrl} alt="Rating's star" />
      <img src={x >= 4 ? redStarUrl : whiteStarUrl} alt="Rating's star" />
      <img src={x >= 5 ? redStarUrl : whiteStarUrl} alt="Rating's star" />
    </div>
  );
}

export default Rating;
