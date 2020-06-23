import React, { useState } from 'react';
import './MiscContent.css';
import './MiscButton/MiscButton';
import MiscButton from './MiscButton/MiscButton';

const MiscContnet = () => {

  const miscButtonClickHandler = () =>
  {
    setPage(1);

  }

  const [page, setPage] = useState(0);
 
  const pages = [
    <MiscButton buttonClick={miscButtonClickHandler}/>,
    <iframe title="important message" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  ];


  return  (
    <div className='MiscContent'>
      {pages[page]}
    </div>
  );
}

export default MiscContnet;