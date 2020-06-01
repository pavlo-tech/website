import React, { Component } from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';

class App extends Component {

  sidebarClicked = (event) => {
    console.log(event.target.textContent);
  }

  render () {
    return (
      <div className="App">
        <Banner/>
        <Sidebar click={this.sidebarClicked}/>;
        <MainContent>
          {true? <h1>hello world</h1> :<p>hi mom</p>}
        </MainContent>
        <div style={{clear:'both'}}></div>
      </div>
    );
  }
}

export default App;
