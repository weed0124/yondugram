import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component {
    state = {
        email: '',
        name: '',
        username: '',
        password: ''
    }
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired
    }
    _handleInputValue = event => {
        const { target : { name, value } } = event;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = event => {
        const { name, email, password, username } = this.state;
        const { createAccount } = this.props;
        event.preventDefault();
        createAccount(username, password, email, name);
    }

    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }

    render() {
        const { email, name, username, password } = this.state;
        return <SignupForm 
                    emailValue={email}
                    nameValue={name}
                    usernameValue={username}
                    passwordValue={password}
                    handleInputValue={this._handleInputValue}
                    handleSubmit={this._handleSubmit}
                    handleFacebookLogin={this._handleFacebookLogin}
                />
    }
}

export default Container;