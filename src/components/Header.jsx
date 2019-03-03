import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import ResponsiveDataTable from "./ResponsiveDataTable";
import MainMenu from "./MainMenu";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  "menu-button": {
    cursor: "pointer"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  computeCaloriesLeft() {
    return this.props.dailyGoal - this.props.calorieCount;
  }

  toggleDrawer() {
    this.setState(previousState => ({
      drawer: !previousState.drawer
    }));
  }

  render() {
    let caloriesLeft = this.computeCaloriesLeft();

    return (
      <div className="header">
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container spacing={8}>
              <Grid item xs={10}>
                <Typography variant="h5" component={Link} to="/">
                  Calorie Tracker
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <MenuIcon
                  className={this.props.classes["menu-button"]}
                  onClick={this.toggleDrawer}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <ResponsiveDataTable
          calorieCount={this.props.calorieCount}
          caloriesLeft={caloriesLeft}
          dailyGoal={this.props.dailyGoal}
        />
        <Drawer
          anchor="top"
          open={this.state.drawer}
          onClose={this.toggleDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <MainMenu />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
