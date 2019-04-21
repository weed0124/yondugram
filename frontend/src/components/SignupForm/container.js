import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component {
    state = {
        email: '',
        fullname: '',
        username: '',
        password: ''
    }
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired
    }
    _handleInputValue = event => {
        const { target : { name, value } } = event;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    _handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }

    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }

    render() {
        const { email, fullname, username, password } = this.state;
        return <SignupForm 
                    emailValue={email}
                    fullnameValue={fullname}
                    usernameValue={username}
                    passwordValue={password}
                    handleInputValue={this._handleInputValue}
                    handleSubmit={this._handleSubmit}
                    handleFacebookLogin={this._handleFacebookLogin}
                />
    }
}

export default Container;