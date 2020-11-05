import React, { Component } from 'react';
import Filter from "../components/filter.js"
import Recepie from "../components/recepie.js"

const mealURL="http://localhost:3000/meals"
class Body extends Component {
    constructor(){
        super()
        this.state = {
            mealArray: []
        }
    }

    componentDidMount() {
        fetch(mealURL)
        .then(data => data.json())
        .then(meals => this.setState({
            mealArray: meals
        }))
    }

    render() {
        return (
            <div>
               <Filter />
               {this.state.mealArray.map(meal =><Recepie meal={meal} key={meal.id}/>)}
            </div>
        );
    }
}

export default Body;