import { Link } from 'react-router';

function Error() {
  return (
    <>
      <h1>Error</h1>
      <h2>Oups! La page que vous ....</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </>
  );
}

export default Error;
