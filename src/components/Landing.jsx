import React, { Component } from "react";
import MainMenu from "./MainMenu";

class Landing extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <MainMenu />
        </div>
      </div>
    );
  }
}

export default Landing;
