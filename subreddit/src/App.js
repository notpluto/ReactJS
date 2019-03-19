import React, { Component } from 'react';
// import './App.css';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Side from './Side';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Menu />
        <Posts />
      </div>
      );
  }
}

export default App;
