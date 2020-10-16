import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Content from './component/Content/Content';
import { BrowserRouter , Route } from 'react-router-dom';
import Form from './component/Form/From';

const Header_Content = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Header_Content}/>
          <Route exact path="/remotely-jobs" component={Header_Content}/>
          <Route path="/signup" component={Form}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
