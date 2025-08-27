import {} from 'react-router';
import styles from './hero.module.scss';

function Hero({ imgUrl, alt, opacity, children }) {
  return (
    <section className={styles.hero}>
      <img className={styles.hero__image} src={imgUrl} alt={alt} />
      <div className={styles.hero__overlay} style={{ opacity: opacity }}></div>
      <div className={styles.hero__title}>{children}</div>
    </section>
  );
}

export default Hero;
