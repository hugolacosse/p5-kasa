import imgUrl from '../../assets/img/HERO-about.png';
import aboutData from '../../assets/data/about.json';
import Dropdown from '../../components/Dropdown/Dropdown';
import Hero from '../../components/Hero/Hero';

function About() {
  const content = aboutData.map((item) => (
    <Dropdown title={item.title} content={item.content} />
  ));
  return (
    <main>
      <Hero
        title="Toto"
        imgUrl={imgUrl}
        alt="Photo of snow-capped mountains."
        opacity={'30%'}
      />
      {content}
    </main>
  );
}

export default About;
