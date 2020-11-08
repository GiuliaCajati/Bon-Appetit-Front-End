import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
 
const loginURL="http://localhost:3000/meals/login"

class LoginContainer extends Component {
  
    constructor(){
        this.state = {
            username: "",
            password: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.value]: event.target.name
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            name: this.state.name,
            password: this.state.password
        }
        fetch(loginURL, {
            method: "Post",
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response .json())
        .then(data => console.log(data) )
    }

    render() {
        return(
        <div>
            <LoginForm user={this.state}/>
        </div>
        )
    }
}

export default LoginContainer 