import React, { Component, Fragment } from "react";
import './App.css';
// import Filter from "./components/Filter.js"
// import PropTypes from "prop-types"
//Hooks 
import { withRouter } from "react-router" //use history for login
import {Route, Switch } from 'react-router-dom' //routes 
//Pages 
import Header from './containers/Headers.js'
import RecepieGrid from "./containers/RecepieGrid.js"
import MealShowPage from "./components/MealShowPage";
import Profile from "./components/Profile"
import LoginForm from './components/LoginForm.js'
import NewUserForm from './components/NewUserForm.js'
import NotFound from './components/NotFound'
import NewMealForm from './components/NewMealForm'



const mealURL="http://localhost:3000/meals/"
class App extends Component {
  
  constructor() {
    super()
      this.state = {
        CurrentUser: null,
        CurrentUserData: null,
        mealArray: [],
        filteredMealArray: []
      }
  }

  componentDidMount() {
    fetch(mealURL)
    .then(data => data.json())
    .then(meals => {
      this.setState({
        mealArray: meals,
        filteredMealArray: meals
      })
    })
  }
   
  //RecepieGrid: Add like (PATCH request)
  addLike = (mealId) => {
    let likedMeal = this.state.mealArray.find(meal => meal.id === mealId)
    let updatedLikes = likedMeal.likes + 1;

  //RecepieGrid: Update likes 
  fetch(mealURL + mealId, {
      method: "PATCH",
      headers:  { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
      body: JSON.stringify({
          likes: updatedLikes
      })
    })
    .then(res => res.json())
    .then(updatedMeal => 
        {let newArray = this.state.mealArray.map(meal => 
            {
                if(meal.id !== updatedMeal.id)
                {
                    return meal
                }else{
                    return updatedMeal
                }})
        //let updatedArray = [...this.state.filteredMealArray, likedMeal]
        this.setState({
            filteredMealArray: [...newArray],
            mealArray:[...newArray]
            })
        })

  }

  filterMealArray = (input) => {
    //search through meal array filter by name 
    let newArray = [...this.state.mealArray].filter(element => element.name.toLowerCase().includes(input.toLowerCase()))
    this.setState ({
        filteredMealArray: [...newArray]
    })
  }

  sortMeals = (radioSelection) => {
    let filteredMealArray = [...this.state.filteredMealArray]
    let sortedMeals
    switch(radioSelection){
      case "names":
        sortedMeals= filteredMealArray.sort((a,b) => a.name > b.name ? 1 : -1)
      case "likes":
        sortedMeals =filteredMealArray.sort((a,b) => a.likes > b.likes ? -1 : 1)
      // case "author":
        //user?
        // return sortedMeals.sort((a,b) => a.user.name > b.name ? 1 : -1)
      default:
        sortedMeals=  filteredMealArray
    
    this.setState ({
      filteredMealArray: [...sortedMeals]
    })}
    
  }
  //login & create new user event 
  setCurrentUser = (data) => {
      this.setState({
        CurrentUser: data.name,
        CurrentUserData: data
    })
  }

  //RecepieGrid(click meal) => Recepie Show Page 
  renderMealShowPage = (mealId) => {
      this.props.history.push(`/meals/${mealId}`)
  }
  
  deleteMeal = (selectedMealId) => {
    //Delete user meals... still need to make
    //set-up back end 
    console.log(this.state.mealArray)
    fetch(mealURL + `${selectedMealId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
    }
    }).then(res => console.log(res)).then(
      this.setState({
        mealArray: this.state.mealArray.filter(meal => meal.id !== selectedMealId),
        filteredMealArray: this.state.filteredMealArray.filter(meal => meal !== selectedMealId)
      }),
      console.log(this.state.mealArray)
    )

  }

  addMeal = (newMealObject) => {
    //from New Meal Form... still need to make
    //fix back end 
    fetch(mealURL, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newMealObject)
    })
    .then(res => res.json())
    .then(newMeal => {
    this.setState({
        mealArray: [...this.state.mealArray, newMeal],
        filteredMealArray: [...this.state.filteredMealArray, newMeal]
      })
    })
    
}
  render(){
    return (
      
      <Fragment>
      <div className="App">
        <Switch>
         {/* Header */}
         <Route path='/meals/:id' component={Header}/>
         
         {/* Meals Page Header */}
        <Route exact path='/' render={() => {return<Header/>}}/>
        <Route exact path='/meals' render={() => {return<Header/>}}/>
        {/* Profile Page Header */}
        <Route exact path='/profile' render={() =>{
          if(this.state.CurrentUser){return<Header/>}}}/>
        {/* Login Page Header (nothing)*/}
        <Route exact path='/login' component={null}/>
        </Switch>
      </div>

      <div className="App">
        <Switch>
          {/* Body */}
         
          {/* Meal Show Page*/}
        <Route path='/meals/:id' render={(props)=> {
          let pathId= props.match.params.id
          let currentMeal = this.state.mealArray.find(meal => meal.id === pathId)
          return<MealShowPage meal={currentMeal} />}
          }/>

        <Route path='/add_meal' component={NewMealForm}/>

          {/* Profile Page */}
        <Route exact path='/profile' 
               render={(props) => {
              return this.state.CurrentUser?(
                <Profile currentUser={this.state.CurrentUser} 
                CurrentUserData={this.state.CurrentUserData}
                deleteMeal={this.deleteMeal}
                renderMealShowPage={this.renderMealShowPage}/>
              ) : ( 
                <LoginForm setCurrentUser={this.setCurrentUser}
                routerProps={props}/>  
              )
              }} />

        {/* New User: Create Account Form*/}
        <Route exact path='/create_account' 
                    render={(props) => <NewUserForm 
                    setCurrentUser={this.setCurrentUser} 
                    routerProps={props}/>}/>
                    
        {/* Login Form*/}
        <Route exact path='/login' 
                    render={(props) => <LoginForm 
                    setCurrentUser={this.setCurrentUser} 
                    routerProps={props}/>}/>

        {/* Meals Index Page*/}
        <Route path='/' render={()=>{
                return<RecepieGrid
                filterMealArray={this.filterMealArray}
                mealArray={this.state.filteredMealArray} 
                addLike={this.addLike}
                renderMealShowPage={this.renderMealShowPage}
                sortMeals={this.sortMeals}/>}}/>  
        <Route path='/meals' render={()=>{
                return<RecepieGrid
                filterMealArray={this.filterMealArray}
                mealArray={this.state.filteredMealArray} 
                addLike={this.addLike}
                renderMealShowPage={this.renderMealShowPage}
                sortMeals={this.sortMeals}/>}}/>  
          

        <Route component={NotFound}/>
        </Switch>
      </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
