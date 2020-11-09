import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                {this.props.currentUser}
                {this.props.currentUser.meals}
            </div>
        );
    }
}

export default Profile;