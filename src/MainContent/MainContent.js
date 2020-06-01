import React from 'react';
import './MainContent.css';

const MainContent = (props) =>
{
  return (
    <div className="MainContent">
      {props.children}
    </div>
  );
}
export default MainContent;