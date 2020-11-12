

import React from "react";
import MealMap from "../components/MealMap";

const mealURL="http://localhost:3000/meals/"
const originsURL="http://localhost:3000/origins"
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

				googleMapURL={``}
				loadingElement={<div style={{ height: `100%`}} />}
				containerElement={<div style={{ height: `600px`, width: `600px`, display:'block'}} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
        
		);
	}
}