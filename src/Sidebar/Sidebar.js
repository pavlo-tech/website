import React, {Component} from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';

class Sidebar extends Component
{
  constructor(props)
  {
    super(props);

    const navKeys = props.navKeys;
  

  
    this.nav = navKeys.map((el,i) => 
      <SidebarItem key={i}  click={props.click}>{el}</SidebarItem>
    );
  }


  render() {
    return (
      <ul className="Sidebar">
        {this.nav}
      </ul>
    );
  }
}

export default Sidebar