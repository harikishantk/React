import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent'

class App extends Component {
  render() {
    return (
      <Menu />
    )
  }
}

export default App;
