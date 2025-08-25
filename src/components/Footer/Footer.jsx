import classes from './footer.module.scss';
import logoUrl from '../../assets/img/LOGO-white.png';

function Footer() {
  return (
    <footer className={classes.footer}>
      <img src={logoUrl} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
