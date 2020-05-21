import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { addPost } from "../../redux/posts/actions";

const useStyles = makeStyles((theme) => ({
  buttonMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

function PostForm(props) {
  const classes = useStyles();
  const authState = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    const decodedId = jwtDecode(authState.token)._id;
    setPost({
      ...post,
      author: decodedId,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/users/${post.author}/posts`,
        post
      );
      dispatch({ type: "GET_POST" });
    } catch (err) {
      console.log(err);
    }
  };
  //Render
  return (
    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        <Typography variant="h6">New Discussion</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={post.title}
          onChange={onChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="content"
          label="Content"
          name="content"
          value={post.content}
          onChange={onChange}
          autoFocus
        />
        <Button
          className={classes.buttonMargin}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
