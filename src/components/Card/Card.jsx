import { Link } from 'react-router';

import styles from './card.module.scss';

function Card({ id, title, imgUrl }) {
  return (
    <article className={styles.card}>
      <Link className={styles.card__link} to={`/logement/${id}`}>
        <img className={styles.card__image} src={imgUrl} alt={title} />
        <h3 className={styles.card__title}>{title}</h3>
      </Link>
    </article>
  );
}

export default Card;
