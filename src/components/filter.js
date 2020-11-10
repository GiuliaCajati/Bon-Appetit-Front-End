import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';



class Filter extends Component {
    render() {
        return (
            <div> 
                <label>Search</label>
                <input onChange={(event) => this.props.filterMealArray(event.target.value)}/>
            </div>
        );
    }
}

export default Filter;