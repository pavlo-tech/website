import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import './App.css';
import Banner from './Banner/Banner';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import ContactContent from './ContactContent/ContactContent';
import HomeContent from './HomeContent/HomeContent';
import AboutContent from './AboutContent/AboutContent';
import MiscContnet from './MiscContent/MiscContent';
import AnimatedBG from './AnimatedBG/AnimatedBG';
import MobileApp from './MobileApp/MobileApp';


class App extends Component {
  constructor(props)
  {
    super(props);

    this.navItems = {
      'home': <HomeContent click={() => this.selectItem('contact')}/>,
      'about me': <AboutContent/>,
      'contact': <ContactContent/>,
      //'stream': <p>this feature isn't ready yet</p>,
      'misc': <MiscContnet/>,
      //'support me': <div/>
    };

    this.state = {
      selectedItem: 'home'
    }
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item
    })
  }

  sidebarClickHandler = (event) => {
    const item = event.target.textContent;
    
    this.selectItem(item);
  }
  renderContent = () =>
  {
    if (isMobile)
    {
      return <MobileApp/>;
    }
    else
    {
      return (
        <div className="MainDiv">
        <AnimatedBG/>
          <div className="App">
            
            <Banner click={() => this.selectItem('home')}/>
            <Sidebar navKeys={Object.keys(this.navItems)} click={this.sidebarClickHandler}/>
            <MainContent>
              {this.navItems[this.state.selectedItem]}
            </MainContent>
            <div style={{clear:'both'}}></div>
          </div>
        </div>
      );
    }
  }

  render () {
    return this.renderContent();
  }
}

export default App;
