import React, { Component } from 'react';
import Filter from "../components/Filter.js"
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
       let likedMeal = this.state.mealArray.find(meal => meal.id === mealId)
       let updatedLikes = likedMeal.likes + 1;

       
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
        filteredMealArray: newArray
    })
    }

    render() {

        return (
            <div>
                <div className="meals-search-bar">
                <Filter filterMealArray={this.filterMealArray}/>
                </div>

                <RecepieGrid 
                mealArray={this.state.filteredMealArray} 
                addLike={this.addLike}
                mealCardFront={this.state.mealCardFront}/>

                
            </div>
        );
    }
}

export default Body;