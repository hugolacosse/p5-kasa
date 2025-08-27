import classes from './about.module.scss';
import imgUrl from '../../assets/img/HERO-about.png';
import aboutData from '../../assets/data/about.json';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Hero from '../../components/Hero/Hero';

function About() {
  const content = aboutData.map((item) => (
    <Collapse key={item.title} title={item.title} content={item.content} />
  ));

  return (
    <main className={classes.about}>
      <Hero
        imgUrl={imgUrl}
        alt="Photo of snow-capped mountains."
        opacity={'30%'}
      />
      <section className={classes.content}>{content}</section>
    </main>
  );
}

export default About;
