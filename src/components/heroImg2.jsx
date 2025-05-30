import "../css/heroImg2.css";

import React, { Component } from "react";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="heroImg2">
        <div className="heading">
          <h2>{this.props.heading}</h2>
          <h4>{this.props.text}</h4>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
