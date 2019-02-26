import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "align-right": {
    "text-align": "right"
  }
});

const ViewMacros = props => {
  const { classes } = props;

  return (
    <div className="view-macros">
      <List>
        <ListItem>
          <ListItemText> Protein Goal: </ListItemText>
          <ListItemText className={props.classes["align-right"]}>
            {props.macros.proteinGoal}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText> Fat Goal: </ListItemText>{" "}
          <ListItemText className={props.classes["align-right"]}>
            {props.macros.fatGoal}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText> Carb Goal: </ListItemText>{" "}
          <ListItemText className={props.classes["align-right"]}>
            {props.macros.carbGoal}
          </ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText> Protein: </ListItemText>
          <ListItemText className={props.classes["align-right"]}>
            {props.macros.protein}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText> Fat: </ListItemText>
          <ListItemText className={props.classes["align-right"]}>
            {props.macros.fat}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText> Carbs: </ListItemText>
          <ListItemText className={props.classes["align-right"]}>
            {props.macros.carbs}
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles)(ViewMacros);
