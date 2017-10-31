import React, { Component } from 'react';
import Client from './client';
import NavBar from './Container/Navbar';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Client />
      </div>
    );
  }
}

export default App;
