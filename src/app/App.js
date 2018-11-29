import React, { Component } from 'react';
import './App.css';
import SocialLinks from '../social-links/SocialLinks';

class App extends Component {

  render() {
    return (
      
      <div className="App">
        <header className="Logo">

          <img src="./logo.jpeg" className="App-logo" alt="deiveris" />
          <h1>Dāvis Krēgers</h1>

          <SocialLinks />

        </header>
      </div>
      
    );
  }

}

export default App;
