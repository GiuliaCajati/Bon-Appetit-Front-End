import React, { Component } from 'react';

import Filter from "../components/Filter.js"
import Recepie from "../components/recepie.js"
import RecepieGrid from "./RecepieGrid.js"

const mealURL="http://localhost:3000/meals/"
class Body extends Component {
    constructor(){
        super()
        this.state = {
            mealArray: [],
            filteredMealArray: [],
            mealCardFront: true
        } 
    }

    componentDidMount() {
        fetch(mealURL)
        .then(data => data.json())
        .then(meals => this.setState({
            mealArray: meals,
            filteredMealArray: meals
        }))
    }

    addLike = (mealId) => {
        console.log(mealId)
       let likedMeal = this.state.mealArray.find(meal => meal.id === mealId)
       let updatedLikes = likedMeal.likes + 1;
       fetch(mealURL + mealId, {
        method: "PATCH",
        headers:  { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body: JSON.stringify({
            meal_likes: updatedLikes,
            meal_id: mealId
        })
    })
    .then(res => res.json())
    .then(updatedMeal => console.log(updatedMeal))
  
    
    // .then(updatedMeal => {
    //     this.setState({
    //         filteredMealArray: [...this.state.filteredMealArray, updatedMeal],
    //         mealArray:[...this.state.mealArray, updatedMeal]
    // })
    //})

    }
      
    filterMealArray = (input) => {
    //search through meal array filter by name 
    let newArray = [...this.state.mealArray].filter(element => element.name.toLowerCase().includes(input.toLowerCase()))
    this.setState ({
        filteredMealArray: newArray
    })
    }

    render() {

        return (
            <div>
                <Filter filterMealArray={this.filterMealArray}/>
                
                <RecepieGrid 
                mealArray={this.state.filteredMealArray} 
                addLike={this.addLike}
                mealCardFront={this.state.mealCardFront}/>
            </div>
        );
    }
}

export default Body;