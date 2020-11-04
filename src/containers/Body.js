import React, { Component } from 'react';
import Filter from "../components/filter.js"
import Recepie from "../components/recepie.js"

class Body extends Component {
    //Fetch Recipies --> Map --> send to Recepies 
    
    render() {
        return (
            <div>
               <Filter />
               <Recepie /> 
            </div>
        );
    }
}

export default Body;