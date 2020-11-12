
// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MealMarker from "./MealMarker";
import { InfoWindow } from "react-google-maps";


const MealMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.originsArray.map(origin => 

  <MealMarker
        
                  key={origin.id}
                  origin={origin.name}
                  test={origin.meals}
                  debugger
                  location= {{lat: origin.latitude , lng: origin.longitude}}/>);

  return (
  
      <GoogleMap
        defaultZoom={14}
        center={ { lat: 38.897570, lng: -77.032558 } }
        >

        {markers}
      </GoogleMap>
    );
  }
))

export default MealMap;