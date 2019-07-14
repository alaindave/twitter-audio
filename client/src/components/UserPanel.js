import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import defaultprofilePicture from "../assets/default-profile-pic.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "325px",
    height: "500px",
    boxShadow: "0px 0px 30px 10px #f0f0f0",
    borderRadius: "5px",
    borderColor: theme.palette.secondary.main,
    borderTop: "6px solid",
    paddingTop: theme.spacing(3)
  },
  item: {
    margin: theme.spacing(1),
    align: "center",
    textAlign: "center"
  },
  profilePicture: {
    width: "100%",
    height: "100%",
    maxWidth: "120px",
    maxHeight: "120px",
    minWidth: "120px",
    minHeight: "120px",

    objectFit: "cover",
    borderRadius: "50%"
  },
  primaryText: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  secondaryText: {
    color: "#adadad" // grey
  }
}));

function UserPanel(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      alignItems="center"
    >
      <Grid item id="profilePicture" className={classes.item}>
        <img
          src={defaultprofilePicture}
          className={classes.profilePicture}
          alt="Profile pic"
        />
      </Grid>
      <Grid item id="name" className={classes.item}>
        <Typography className={classes.primaryText}>John Doe</Typography>
        <Typography className={classes.secondaryText}>@johndoe</Typography>
      </Grid>
      <Grid item id="location" className={classes.item}>
        <Typography style={{ fontWeight: "bold" }}>
          Toronto, Ontario, Canada
        </Typography>
      </Grid>
      <Grid item id="edit" className={classes.item}>
        <Button
          variant="contained"
          color="secondary"
          style={{ textTransform: "none", margin: "3px" }}
        >
          Edit
        </Button>
      </Grid>
      <Grid item id="description" className={classes.item}>
        <Typography className={classes.secondaryText}>
          Architectural photographer and photo columnist. I am interested in
          social life, ecology and politcs.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserPanel;
