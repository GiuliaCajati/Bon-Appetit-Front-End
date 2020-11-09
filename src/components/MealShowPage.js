import React, { Component } from 'react';

class MealShowPage extends Component {
    render(props) {
        return (
            <div>
                {!this.props.meal?null:
                <div>
                {this.props.meal.name}
                <img src={this.props.meal.photo_url}/>
                </div>} 
                
            </div>
        );
    }
}

export default MealShowPage;