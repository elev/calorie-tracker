import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  unit: {
    display: "block",
    "font-family": theme.typography.fontFamily,
    color: theme.palette.text.secondary,

    [theme.breakpoints.up("md")]: {
      display: "inline-block",
      padding: theme.spacing.unit * 2
    }
  },

  heading: {
    diplay: "inline-block",

    [theme.breakpoints.up("md")]: {
      display: "block"
    },

    value: {
      diplay: "inline-block",

      [theme.breakpoints.up("md")]: {
        display: "block"
      }
    }
  }
});

const ResponsiveDataTable = props => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.unit}>
        <div className={classes.heading}>Goal</div>
        <div className={classes.value}>{props.dailyGoal}</div>
      </div>
      <div className={classes.unit}>
        <div className={classes.heading}>Consumed</div>
        <div className={classes.value}>{props.calorieCount}</div>
      </div>
      <div className={classes.unit}>
        <div className={classes.heading}>Remaining</div>
        <div className={classes.value}>{props.caloriesLeft}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ResponsiveDataTable);
