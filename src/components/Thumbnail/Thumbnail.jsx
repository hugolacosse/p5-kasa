import { Link } from 'react-router';

import styles from './thumbnail.module.scss';

function Thumbnail({ id, title, imgUrl }) {
  return (
    <article className={styles.thumbnail}>
      <Link className={styles.thumbnail__link} to={`/logement/${id}`}>
        <img className={styles.thumbnail__image} src={imgUrl} alt={title} />
        <h3 className={styles.thumbnail__title}>{title}</h3>
      </Link>
    </article>
  );
}

export default Thumbnail;
