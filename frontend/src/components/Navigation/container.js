import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: "",
    notification: false
  };
  static propTypes = {
    goToSearch: PropTypes.func.isRequired
  };
  render() {
    const { term, notification } = this.state;
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        value={term}
        openNotification={this._openNotification}
        notification={notification}
      />
    );
  }
  _onInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      term: value
    });
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };
  _openNotification = () => {
    const { notification } = this.state;
    
    if(notification){
        this.setState({
            notification: false
        });
    }
    else {
        this.setState({
            notification: true
        });
    }
  }
}

export default Container;