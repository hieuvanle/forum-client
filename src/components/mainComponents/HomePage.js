import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../subComponents/LoginForm";
import Button from "@material-ui/core/Button";
import Post from "../subComponents/Post";
import PostForm from "../subComponents/PostForm";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PostModal from "../subComponents/PostModal";
import { green, yellow, red, orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: 12,
  },
  buttonPaper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  paperButton: {
    margin: theme.spacing(1),
    marginLeft: 0,
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    color: "black",
    border: "none !important",
    borderRadius: 15,
    width: "min-content",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 1.325,
  },
  subPaper: {
    padding: theme.spacing(3),
    borderRadius: 12,
    margin: theme.spacing(3),
  },
  createPost: {
    marginBottom: theme.spacing(4),
  },
  loginPaper: {
    borderRadius: 12,
    padding: theme.spacing(2),
  },
}));

function HomePage() {
  //Static states
  const [isAuth, setAuth] = useState(true);
  const [posts, setPosts] = useState([
    {
      _id: 1,
      title: "First post",
      content: "This is the first post",
      author: "Alex",
    },
    {
      _id: 2,
      title: "Second post",
      content: "This is the second post",
      author: "Hannah",
    },
    {
      _id: 3,
      title: "First post",
      content: "This is the first post",
      author: "Alex",
    },
  ]);
  const classes = useStyles();
  //Render
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={4} sm={12}>
            {" "}
            {!isAuth ? (
              <Paper className={classes.loginPaper} elevation={1}>
                <LoginForm />
              </Paper>
            ) : (
              <div>
                <div className={classes.createPost}>
                  <PostModal />
                </div>{" "}
                <div className={classes.buttonPaper}>
                  <Button
                    variant="contained"
                    className={classes.paperButton}
                    startIcon={<HomeIcon color="primary" />}
                  >
                    Home{" "}
                  </Button>{" "}
                  <Button
                    variant="contained"
                    className={classes.paperButton}
                    startIcon={
                      <ExploreIcon
                        style={{
                          color: yellow[500],
                        }}
                      />
                    }
                  >
                    Explore{" "}
                  </Button>{" "}
                  <Button
                    variant="contained"
                    className={classes.paperButton}
                    startIcon={
                      <NotificationsIcon
                        style={{
                          color: red[500],
                        }}
                      />
                    }
                  >
                    Notifications{" "}
                  </Button>{" "}
                  <Button
                    variant="contained"
                    className={classes.paperButton}
                    startIcon={
                      <MailOutlineIcon
                        style={{
                          color: green[500],
                        }}
                      />
                    }
                  >
                    Messages{" "}
                  </Button>{" "}
                  <Button
                    variant="contained"
                    className={classes.paperButton}
                    startIcon={<PersonIcon />}
                  >
                    Profile{" "}
                  </Button>{" "}
                </div>{" "}
              </div>
            )}{" "}
          </Grid>{" "}
          <Grid item md={8} sm={12}>
            <Paper className={classes.paper} elevation={1}>
              {" "}
              {posts.map((post) => {
                return (
                  <Post
                    id={post._id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                  />
                );
              })}{" "}
            </Paper>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </div>
  );
}

export default HomePage;
