import imgUrl from '../../assets/img/AboutHero.svg';
import aboutData from '../../assets/data/about.json';
import Dropdown from '../../components/Dropdown/Dropdown';

function About() {
  const content = aboutData.map((item) => (
    <Dropdown title={item.title} content={item.content} />
  ));
  return (
    <main>
      <img src={imgUrl} alt="Photo of snow-capped mountains." />
      {content}
    </main>
  );
}

export default About;
