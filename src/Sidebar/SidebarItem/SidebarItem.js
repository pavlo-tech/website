import React, {Component} from 'react';
import './SidebarItem.css';

class SidebarItem extends Component
{
  constructor(props)
  {
    super(props);

    this.itemStyle = {
      //height:(100*1.0/ navKeys.length)+'%',
      height:'19.4%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #555'
    }
    this.props=props
    
  }

  render ()
  {
    return (
      <li className='SidebarItem' style={this.itemStyle} onClick={this.props.click}>
        {this.props.children}
      </li>
    );
  }
}
export default SidebarItem;