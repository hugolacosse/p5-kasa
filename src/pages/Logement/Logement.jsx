import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel/Carousel.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Rating from '../../components/Rating/Rating.jsx';
import Tag from '../../components/Tag/Tag.jsx';
import styles from './logement.module.scss';
import fetchItems from '../../api/fetchItems.js';

function Logement() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const data = fetchItems();
    data.then((listItems) => {
      listItems.map((item) => {
        if (item.id == id) {
          setItem(item);
        }
      });
    });
  }, []);

  return (
    <main>
      {item ? (
        <>
          <Carousel pictures={item.pictures} />
          <section className={styles.info}>
            <div className={styles.info__logement}>
              <h1>{item.title}</h1>
              <h2>{item.location}</h2>
              <div className={styles.info__tags}>
                {item.tags.map((tag) => (
                  <Tag key={tag} content={tag} />
                ))}
              </div>
            </div>
            <div className={styles.info__host}>
              <div className={styles.info__profile}>
                <p>{item.host.name}</p>
                <img src={item.host.picture} alt="Host's profil picture." />
              </div>

              <Rating value={item.rating} />
            </div>
          </section>
          <section className={styles.collapses}>
            <Collapse title={'Description'} content="todo" />
            <Collapse title={'Équipements'} content="todo" />
          </section>
        </>
      ) : (
        ''
      )}
    </main>
  );
}

export default Logement;
