import { Link, useLocation } from 'react-router';
import styles from './header.module.scss';
import logoUrl from '../../assets/img/LOGO.png';

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoUrl} alt="Logo de Kasa" />
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li>
            <Link to="/404">r</Link>
          </li>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? styles.currentPage : ''}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                location.pathname === '/about' ? styles.currentPage : ''
              }
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={`${styles.navbar} ${styles.mobile}`}>
        <ul className={styles.navbar__list}>
          <li>
            <Link to="/404">r</Link>
          </li>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? styles.currentPage : ''}
            >
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                location.pathname === '/about' ? styles.currentPage : ''
              }
            >
              A PROPOS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
