import React, { Component, Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './containers/Headers.js'
import Body from './containers/Body.js'
import LoginForm from './components/LoginForm.js'
import {Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'

class App extends Component {
  constructor() {
    super()
    this.state = {
      CurrentUser: null,
      CurrentAvatar: null
    }
  }

  setCurrentUser= (data) =>
  this.setState({
    CurrentUser: data.user,
    CurrentAvatar: data.photo_url
  })
  
  render(){
    return (
      <Fragment>
      <div className="App">
        <Switch>
        <Route exact path='/meals' component={Header}/>
        <Route exact path='/login' component={null}/>
        </Switch>
      </div>
      <div className="App">
        <Switch>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/meals' component={Body}/>
        <Route component={NotFound}/>
        </Switch>
      </div>
      </Fragment>
    );
  }
}

export default App;
