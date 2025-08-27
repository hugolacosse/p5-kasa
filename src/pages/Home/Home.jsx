import { useEffect, useState } from 'react';
import fetchItems from '../../api/fetchItems';

import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';

import styles from './home.module.scss';
import imgUrl from '../../assets/img/HERO-home.png';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = fetchItems();
    data.then((listItems) => {
      setItems(listItems);
    });
  }, []);

  return (
    <main>
      <Hero
        imgUrl={imgUrl}
        alt="Photo of a wave crashing on the coast."
        opacity={'60%'}
      >
        <h4>Chez vous,&nbsp;</h4>
        <h4>partout et ailleurs</h4>
      </Hero>
      <section className={styles.container}>
        {items.map((item) => (
          <Card key={item.id} title={item.title} imgUrl={item.cover} />
        ))}
      </section>
    </main>
  );
}

export default Home;
