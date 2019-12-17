import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: ""
        }
    }

    SignIn = (e) => {
        e.preventDefault();

    }

    handleSignIn = (e) => {
        this.setState({email: e.target.value});
    }

    render() {
        return (
            <div className = 'text-center'>
                <form onSubmit={this.SignUp} >
                    <input type= 'text' placeholder='your email'  onChange={this.handleSignup}/>
                    <button type= "submit"> Sign In </button>
                </form>
                <button type= "button" onClick= {() => console.log('button clicked')}> <Link to="/SignUp">SignUp</Link></button>
            </div>
        )
    }
}
