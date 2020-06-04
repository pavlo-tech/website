import React, { Component } from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import ContactContent from './ContactContent/ContactContent';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.navItems = {
      'home': <h2>Welcome home</h2>,
      'about me': <h2>about page</h2>,
      'contact': <ContactContent/>,
      'stream': <p>this feature isn't ready yet</p>,
      'misc': <h1>I bet you want to know what goes here</h1>
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
    event.target.clicked=true;
    console.log(event.target);
    
    this.selectItem(item);
  }


  render () {
    return (
      
      <div className="App">
        <Banner click={() => this.selectItem('home')}/>
        <Sidebar navKeys={Object.keys(this.navItems)} click={this.sidebarClickHandler}/>
        <MainContent>
          {this.navItems[this.state.selectedItem]}
        </MainContent>
        <div style={{clear:'both'}}></div>
      </div>
    );
  }
}

export default App;
