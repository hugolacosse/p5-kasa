import styles from './tag.module.scss';

function Tag({ content }) {
  return (
    <article className={styles.tag}>
      <p>{content}</p>
    </article>
  );
}

export default Tag;
