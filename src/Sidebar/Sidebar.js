import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props) =>
{
  const navKeys = props.navKeys;
 
  const nav = navKeys.map((el,i) => 
    <SidebarItem key={i}  click={props.click} height={(100.0/ navKeys.length)+'%'}>
      {el}
    </SidebarItem>
  )

  return (
    <div className="Sidebar">
      {nav}
    </div>
  );

}

export default Sidebar