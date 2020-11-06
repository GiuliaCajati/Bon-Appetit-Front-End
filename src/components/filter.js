import React, { Component } from 'react';


class Filter extends Component {
    render() {
        return (
            <div>
                <label>Search </label>
                <input onChange={(event) => this.props.filterMealArray(event.target.value)}/>
                {/* <div>
                <label>Sort By</label>
                </div> */}
                
    
            </div>
        );
    }
}

export default Filter;