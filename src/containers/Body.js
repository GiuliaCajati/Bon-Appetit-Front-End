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
            <UseStyles mealArray={this.state.mealArray} />
            
            </div>
        );
    }
}

export default Body;