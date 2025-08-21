import { Link } from 'react-router';
import './header.module.css';

function Header() {
  return (
    <header>
      <h1>Kasa</h1>
      <nav>
        <ul>
          <li>
            <Link to="/404">Error</Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
