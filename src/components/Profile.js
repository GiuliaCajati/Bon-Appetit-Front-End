import React, { Component } from 'react';

class Profile extends Component {
    render() {
        //show all meals 
        //add meal 
        return (
            <div>
                {console.log(this.props.currentUser.meals)}
            <h2>Welcome {this.props.currentUser}</h2> 
            <div>{this.props.CurrentUserData.meals.map(meal => meal.name)}</div>
    
            </div>
            
        );
    }
}

export default Profile;