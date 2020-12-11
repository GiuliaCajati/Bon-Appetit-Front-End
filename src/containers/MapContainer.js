

import React from "react";
import MealMap from "../components/MealMap";

const mealURL="https://aqueous-depths-38272.herokuapp.com/"
const originsURL="https://aqueous-depths-38272.herokuapp.com/origins"

// const mealURL="http://localhost:3000/meals/"
// const originsURL="http://localhost:3000/origins"
export default class MapContainer extends React.Component {

    constructor() {
        super()
          this.state = {
            originsArray: []
          }
      }
   
    componentDidMount() {
        fetch(originsURL)
        .then(data => data.json())
        .then(origins => {
          this.setState({
            originsArray: origins
        })
      })
    }


	render() {
		return (
        
            <MealMap 

            
                originsArray={this.state.originsArray}

				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDCHUHax6W-OQ0dHLUHg2YFujx9-2h4ABc&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%`}} />}
				containerElement={<div style={{ height: `600px`, width: `600px`, display:'block'}} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
        
		);
	}
}