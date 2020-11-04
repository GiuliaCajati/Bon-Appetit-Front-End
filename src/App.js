import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './containers/Headers.js'
import Body from './containers/Body.js'




class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
