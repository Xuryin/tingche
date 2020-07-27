import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import "core-js/stable";
import './framework.styl'

class Framework extends Component {
  onLogout = () => {
    sessionStorage.removeItem("accountInfo-qqzx");
    window.location.reload();
  }

  render() {
    return (
      <div className="cbd-framework">
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Framework)
