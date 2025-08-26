import { Link } from 'react-router';
import classes from './pagenotfound.module.scss';

function PageNotFound() {
  return (
    <main className={classes.pagenotfound}>
      <h1 className={classes.title}>404</h1>
      <h2 className={classes.subtitle}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className={classes.link} to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default PageNotFound;
