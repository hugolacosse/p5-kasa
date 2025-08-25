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
            <Link to="/404">Error</Link>
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
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
