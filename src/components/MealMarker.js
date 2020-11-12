
import React from "react";
import { Marker } from "react-google-maps";
import chefHat from '@iconify-icons/mdi/chef-hat';

export default class DoctorMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={chefHat}
        >
        </Marker>
    );
  }
}

