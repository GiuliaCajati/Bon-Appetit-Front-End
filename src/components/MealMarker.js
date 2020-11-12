
import React from "react";
import { Marker } from "react-google-maps";
import chefHat from '@iconify-icons/mdi/chef-hat';


export default class MealMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          
          icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
          //map-icon-restaurant
        />
    );
  }
}

