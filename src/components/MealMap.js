
// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MealMarker from "./MealMarker";

const MealMap = withScriptjs(withGoogleMap((props) =>{

  // const markers = props.doctors.map( doctor => <MealMarker
  //                   key={doctor.uid}
  //                   doctor={doctor}
  //                   location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
  //                 />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat: 38.897570, lng: -77.032558 } }
        >
        {/* {markers} */}
      </GoogleMap>
    );
  }
))

export default MealMap;