import { Link } from 'react-router';
import './pagenotfound.module.css';

function PageNotFound() {
  return (
    <main>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default PageNotFound;
