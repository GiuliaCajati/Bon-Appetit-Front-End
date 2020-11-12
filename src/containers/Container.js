import React, { Component } from 'react';
import MapContainer from './MapContainer';

class Container extends Component {
    render() {
        return (
            <div id="map-container">
                <MapContainer/>
            </div>
        );
    }
}

export default Container;