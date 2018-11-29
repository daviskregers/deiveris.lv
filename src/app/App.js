import React, { Component } from 'react';
import './App.css';
import SocialLinks from '../social-links/SocialLinks';
import Particles from 'react-particles-js';


class App extends Component {

  render() {
    return (
      
      <div className="App">
        <header className="Logo">

          <img src="./logo.jpeg" className="App-logo" alt="deiveris" />
          <h1>Dāvis Krēgers</h1>

          <SocialLinks />

        </header>

        <Particles params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 1
            				}
            			}
            		}
              }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />

      </div>
      
    );
  }

}

export default App;
