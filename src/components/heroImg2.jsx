import "../css/heroImg2.css";

import React, { Component } from "react";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="heroImg2">
        <div className="heading">
          <h2 className="font-semibold">{this.props.heading}</h2>
          <h4 className="font-semibold place-self-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-gray-400 to-blue-400">{this.props.text}</h4>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
