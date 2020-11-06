import React, { Component } from 'react';

import Filter from "../components/Filter.js"
import Recepie from "../components/Recepie.js"
import RecepieGrid from "./RecepieGrid.js"

const mealURL="http://localhost:3000/meals"
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
    toggleMeal = () => {
        this.setState({
          mealCardFront: !this.state.mealCardFront
        })
      }

      filterMealArray = (input) => {
        //search through meal array filter by name 
        let newArray = [...this.state.mealArray].filter(element => element.name.toLowerCase().includes(input.toLowerCase()))
        this.setState ({
            filteredMealArray: newArray
        })

        //return new array (setState) with things that include the input 
      }



    render() {

        return (
            <div>
                <Filter filterMealArray={this.filterMealArray}/>
                <RecepieGrid 
                mealArray={this.state.filteredMealArray} 
                toggleMeal={this.toggleMeal}
                mealCardFront={this.state.mealCardFront}/>
            </div>
        );
    }
}

export default Body;