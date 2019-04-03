import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default App;
