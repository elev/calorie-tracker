import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const styles = theme => ({
  menuItem: {
    display: "block",
    textAlign: "center"
  }
});

const MainMenu = props => {
  const { classes } = props;

  return (
    <MenuList>
      <MenuItem component={Link} to="add-food" className={classes.menuItem}>
        Add Food
      </MenuItem>
      <MenuItem component={Link} to="add-exercise" className={classes.menuItem}>
        Add Exercise
      </MenuItem>
      <MenuItem component={Link} to="view-macros" className={classes.menuItem}>
        View Macros
      </MenuItem>
      <MenuItem component={Link} to="goals" className={classes.menuItem}>
        Update Goals
      </MenuItem>
    </MenuList>
  );
};

export default withStyles(styles)(MainMenu);
