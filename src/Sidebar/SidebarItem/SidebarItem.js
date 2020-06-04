import React from 'react';
import './SidebarItem.css';

const SidebarItem = (props) =>
{
  const itemStyle = {
    height: props.height,
    borderRadius:'20px',
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    //backgroundColor: 'inherit',
    boxShadow:'none'
    //border: '1px solid #555'
  }

  return (
    <button className='SidebarItem' style={itemStyle} onClick={props.click}>
      {props.children}
    </button>
  );
}
export default SidebarItem;