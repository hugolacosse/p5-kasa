import classes from './collapse.module.scss';
import arrowUrl from '../../assets/img/arrow.svg';
import { useState } from 'react';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(0);

  function handleClick() {
    setIsOpen(!isOpen);
    console.log('clicked');
  }

  return (
    <article className={classes.collapse}>
      <div className={classes.collapse__container}>
        <h3>{title}</h3>
        <img
          onClick={handleClick}
          className={`${isOpen ? classes.arrowOpen : classes.arrowClose}`}
          src={arrowUrl}
          alt="Arrow button"
        />
      </div>
      <div
        className={`${classes.collapse__content} ${isOpen ? classes.showContent : classes.hideContent}`}
      >
        {content}
      </div>
    </article>
  );
}

export default Collapse;
