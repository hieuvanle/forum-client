import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../subComponents/LoginForm";
import Post from "../subComponents/post/Post";
import Loading from "../subComponents/Loading";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../subComponents/profile/ProfileCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: 12,
  },
  postPaper: {
    padding: theme.spacing(2),
    borderRadius: 12,
    minHeight: "120vh",
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  subPaper: {
    padding: theme.spacing(3),
    borderRadius: 12,
    margin: theme.spacing(3),
  },
  loginPaper: {
    borderRadius: 12,
    padding: theme.spacing(2),
    marginTop: theme.spacing(10),
    position: "fixed",
    maxWidth: "25vw",
  },
}));

function HomePage() {
  const classes = useStyles();
  const postState = useSelector((state) => state.postState);
  const authState = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_POSTS" });
  }, []);

  //Render
  return (
    <div>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={4} sm={12}>
            {!authState.isAuth ? (
              <Paper className={classes.loginPaper} elevation={1}>
                {authState.loading ? <Loading /> : <LoginForm />}
              </Paper>
            ) : (
              <ProfileCard />
            )}
          </Grid>
          <Grid item md={8} sm={12}>
            <Paper className={classes.postPaper} elevation={1}>
              {postState.loading ? (
                <Loading />
              ) : (
                postState.posts.map((post) => (
                  <Post
                    key={post._id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                  />
                ))
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
