import React, { Component, Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './containers/Headers.js'
import Body from './containers/Body.js'
import LoginForm from './components/LoginForm.js'
import NewUserForm from './components/NewUserForm.js'
import {Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import MealShowPage from "./components/MealShowPage";
import Profile from "./components/Profile";

class App extends Component {
  constructor() {
    super()
      this.setState = {
        CurrentUser: null,
        CurrentAvatar: null
      }
  }

  //login or create new user form should call on this to set state (but props are not getting passed down??)
  setCurrentUser = (data) => {
    this.setState({
      CurrentUser: data.user,
      CurrentAvatar: data.photo_url
    })
  }

  render(){
    return (
      <Fragment>
      <div className="App">
        <Switch>
         {/* Header */}
        <Route exact path='/meals' component={Header}/>
        <Route exact path='/login' component={null}/>
        </Switch>
      </div>
      <div className="App">
        <Switch>
          {/* Body */}
        <Route exact path='/profile' render={() => {
        return this.state.CurrentUser ? (
          <Profile currentUser={this.state.CurrentUser} currentAvatar={this.state.CurrentAvatar}/>
        ) : ( 
          <LoginForm setCurrentUser={this.setCurrentUser}/>
        )
        }} />

        <Route exact path='/login' render={() => <LoginForm setCurrentUser={this.setCurrentUser}/>} />
        <Route exact path='/create_account' component={NewUserForm}/>
        <Route exact path='/meals' component={Body}/>
        <Route component={NotFound}/>
        </Switch>
      </div>
      </Fragment>
    );
  }
}

export default App;
