import React from 'react';
import './Sidebar.css';

const Sidebar = (props) =>
{
  const navItems = ['home', 'about me', 'contact','stream','misc'];

  const itemStyle ={
    height:(100*1.0/navItems.length)+'%',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const nav = navItems.map((el,i) => 
    <p key={i} style={itemStyle} onClick={props.click}>{el}</p>
  );

  return (
    <div className="Sidebar">
      {nav}
    </div>
  );
}

export default Sidebar