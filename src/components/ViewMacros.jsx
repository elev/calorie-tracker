import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class NewFood extends Component {
  render() {
    return (
      <div className="view-macros">
        <Header />
        <div>
          List Macros here, These may need to be stored in a database, server,
          text file, or cookie/session
        </div>
      </div>
    );
  }
}

export default NewFood;
