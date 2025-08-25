import Hero from '../../components/Hero/Hero';
import imgUrl from '../../assets/img/HERO-home.png';

function Home() {
  return (
    <main>
      <Hero
        title="Chez vous, partout et ailleurs"
        imgUrl={imgUrl}
        alt="Photo of snow-capped mountains."
        opacity={'60%'}
      >
        <h4>Chez vous,&nbsp;</h4>
        <h4>partout et ailleurs</h4>
      </Hero>
      <p>Composant-location 1</p>
      <p>Composant-location 2</p>
      <p>Composant-location 3</p>
      <p>Composant-location 4</p>
      <p>Composant-location 5</p>
      <p>Composant-location 6</p>
    </main>
  );
}

export default Home;
