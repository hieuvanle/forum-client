import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  subPaper: {
    padding: theme.spacing(3),
    borderRadius: 12,
    margin: theme.spacing(3),
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  title: {
    lineHeight: 1.5,
    fontWeight: 700,
  },
  content: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
  },
}));

function Post(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper className={classes.subPaper} elevation={2}>
      <Grid container spacing={3}>
        <Grid item xs={2} className={classes.center}>
          <p>{props.author}</p>
        </Grid>
        <Grid item xs={8}>
          <div>
            <Typography className={classes.title} variant="h6">
              {props.title}
            </Typography>
            <Typography className={classes.content} variant="body1">
              {props.content}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1} className={classes.center}>
          <IconButton color="inherit">
            <ModeCommentIcon color="primary" fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={1} className={classes.center}>
          <IconButton onClick={handleMenu} color="inherit">
            <MoreVertIcon
              fontSize="small"
              color="action"
              onClick={handleMenu}
            />
          </IconButton>
        </Grid>
        <div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </div>
      </Grid>
    </Paper>
  );
}

export default Post;
