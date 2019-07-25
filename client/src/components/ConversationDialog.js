import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Container, Paper, Typography, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import ThumbUp from "@material-ui/icons/ThumbUp";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Reply from "@material-ui/icons/Reply";
import Star from "@material-ui/icons/Star";

import { StyledButton } from "../themes/theme";

const useStyles = makeStyles(theme => ({
  dialog: {
    background: "rgb(57, 86, 225, 0.9)" // blue
    // background: "rgb(240, 240, 240, 0.9)" // grey
  },
  root: {
    marginTop: theme.spacing(5)
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(3)
  },
  audio: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    width: "70%",
    boxShadow: "0px 0px 15px 5px #f0f0f0"
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    width: "90%"
  },
  item: {
    marginRight: theme.spacing(2)
  },
  icon: {
    color: "#dfe3f0", // blue grey
    marginRight: theme.spacing(1)
    // position: "relative",
    // top: "5px",
    // paddingRight: theme.spacing(1)
  },
  text: {
    fontWeight: "bold"
  },
  button: {
    color: "black"
  },
  divider: {
    // make divider same size as dialog
    position: "relative",
    left: "-24px",
    width: "50vw"
  }
}));

function ConversationDialog(props) {
  const classes = useStyles();
  const { title, open } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={props.handleClose}
        fullWidth={true}
        maxWidth={"md"}
        BackdropProps={{
          classes: {
            root: classes.dialog
          }
        }}
        PaperProps={{
          style: {
            minHeight: "80vh",
            maxWidth: "50vw",
            boxShadow: "none"
          }
        }}
      >
        <DialogContent>
          <Container className={classes.root}>
            <Typography className={classes.title}>{title}</Typography>
            <Paper className={classes.audio} />
            <Grid container alignItems="center" className={classes.container}>
              <Grid item>
                <ThumbUp className={classes.icon} />
              </Grid>
              <Grid item id="likes" className={classes.item}>
                <Typography className={classes.text}>0</Typography>
              </Grid>

              <Grid item>
                <ChatBubble className={classes.icon} />
              </Grid>
              <Grid item id="comments" className={classes.item}>
                <Typography className={classes.text}>0</Typography>
              </Grid>

              <Grid item id="reply" className={classes.item}>
                <StyledButton className={classes.button} variant="outlined">
                  <Reply style={{ color: "#dfe3f0" }} />
                  <Typography className={classes.text} component="span">
                    Reply
                  </Typography>
                </StyledButton>
              </Grid>

              <Grid item id="follow" className={classes.item}>
                <StyledButton className={classes.button} variant="outlined">
                  <Star style={{ color: "#dfe3f0" }} />
                  <Typography className={classes.text} component="span">
                    Follow
                  </Typography>
                </StyledButton>
              </Grid>

              <Grid item style={{ marginRight: "10px", flex: 1 }}>
                <Typography
                  className={classes.text}
                  style={{
                    float: "right",
                    color: "#adadad" // grey
                  }}
                  component="span"
                >
                  Listens:
                </Typography>
              </Grid>
              <Grid item id="listens" className={classes.item}>
                <Typography className={classes.text} component="span">
                  0
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Divider className={classes.divider} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ConversationDialog;