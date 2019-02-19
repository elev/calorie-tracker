import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";

class Landing extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <MenuList>
            <MenuItem component={Link} to="add-food">
              Add Food
            </MenuItem>
            <MenuItem component={Link} to="add-exercise">
              Add Exercise
            </MenuItem>
            <MenuItem component={Link} to="view-macros">
              View Macros
            </MenuItem>
            <MenuItem component={Link} to="goals">
              Update Goals
            </MenuItem>
          </MenuList>
        </div>
      </div>
    );
  }
}

export default Landing;
