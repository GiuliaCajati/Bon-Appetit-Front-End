import React, { Component } from 'react';
import Filter from "../components/Filter.js"
import Recepie from "../components/Recepie.js"
import UseStyles from "./RecepieGrid.js"

const mealURL="http://localhost:3000/meals"
class Body extends Component {
    constructor(){
        super()
        this.state = {
            mealArray: []
            // mealCardFront: true
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
        
        // this.setState({
        //   mealCardFront: !this.state.mealCardFront
        // })
      }

    render() {
        console.log(this.state.mealCardFront)
        return (
            <div>
               <Filter />
            <UseStyles mealArray={this.state.mealArray} 
            toggleMeal={this.toggleMeal}/>
            
            </div>
        );
    }
}

export default Body;