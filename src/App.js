import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Content from './component/Content/Content';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content />
      </div>
    )
  }
}

export default App;
