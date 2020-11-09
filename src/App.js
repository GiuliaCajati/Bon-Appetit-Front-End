import React, { Component, Fragment } from "react";
import './App.css';
import Header from './containers/Headers.js'
import Body from './containers/Body.js'
import LoginForm from './components/LoginForm.js'
import NewUserForm from './components/NewUserForm.js'
import {Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import Profile from "./components/Profile"
import PropTypes from "prop-types"
import { withRouter } from "react-router"

class App extends Component {
  constructor() {
    super()
      this.state = {
        CurrentUser: null,
        CurrentAvatar: null
      }
  }

  //login or create new user form should call on this to set state (but props are not getting passed down??)
  setCurrentUser = (data) => {
    this.setState({
      CurrentUser: data.name,
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
        <Route exact path='/profile' component={Header}/>
        <Route exact path='/login' component={null}/>
        </Switch>
      </div>
      <div className="App">
        <Switch>
          {/* Body */}
        <Route exact path='/profile' render={() => {
              return this.state.CurrentUser ? (
                <Profile currentUser={this.state.CurrentUser} 
                      currentAvatar={this.state.CurrentAvatar}/>
              ) : ( 
                <LoginForm setCurrentUser={this.setCurrentUser}/>  
              )
              }} />

        <Route exact path='/create_account' 
                    render={(props) => <NewUserForm 
                    setCurrentUser={this.setCurrentUser} 
                    routerProps={props}/>}/>
                    

        <Route exact path='/login' 
                    render={(props) => <LoginForm 
                    setCurrentUser={this.setCurrentUser} 
                    routerProps={props}/>}/>

        <Route exact path='/meals' component={Body}/>

        <Route component={NotFound}/>
        </Switch>
      </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
