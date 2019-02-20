import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import About from './components/about/about'
import Specials from './components/specials/specials'
import Menu from './components/menu/menu'
import Contact from './components/contact/contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        < About / >
        < Specials / >
        < Menu / >
        < Contact / >

      </div>
    );
  }
}

export default App;
