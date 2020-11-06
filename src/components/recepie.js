import React, { Component } from 'react';


class Recepie extends Component {
    state = {
        mealCardFront: true
      }

    toggleMeal = () => {
        this.setState({
          mealCardFront: !this.state.mealCardFront
        })
      }

    render() {
        return (
            <div onClick={this.toggleMeal}>

                {this.state.mealCardFront?
                //meal image
                <img src={this.props.meal.photo_url} />:
                //meal info
                <div>
                    <h2>{this.props.meal.name}</h2>
                    <p>
                        <h5>
                           {this.props.meal.origin}
                        </h5> 
                        {this.props.meal.instructions}
                    </p>
                </div>} 

            </div>
        );
    }
}

export default Recepie;