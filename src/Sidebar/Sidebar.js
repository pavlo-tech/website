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
      <SidebarItem key={i}  click={props.click} height={(100.0/ navKeys.length)+'%'}>
        {el}
      </SidebarItem>
    )
  }


  render() {
    return (
      <div className="Sidebar">
        {this.nav}
      </div>
    );
  }
}

export default Sidebar