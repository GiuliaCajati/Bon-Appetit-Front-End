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
            mealCardFront: true
        }
        
    }

    componentDidMount() {
        fetch(mealURL)
        .then(data => data.json())
        .then(meals => this.setState({
            mealArray: meals
        }))
    }

    toggleMeal = () => {
        this.setState({
          mealCardFront: !this.state.mealCardFront
        })
      }

    render() {

        return (
            <div>
                <Filter />
                <RecepieGrid 
                mealArray={this.state.mealArray} 
                toggleMeal={this.toggleMeal}
                mealCardFront={this.state.mealCardFront}/>
            </div>
        );
    }
}

export default Body;