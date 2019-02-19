import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Main />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
