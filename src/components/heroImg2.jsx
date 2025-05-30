import "../css/heroImg2.css";

import React, { Component } from "react";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="heroImg2">
        <div className="heading">
          <h2 className="font-semibold">{this.props.heading}</h2>
          <h4 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-blue-300">{this.props.text}</h4>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
