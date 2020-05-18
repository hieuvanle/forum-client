import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buttonMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

function PostForm(props) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form}>
        <Typography variant="h6">Start new Discussion</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
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
          autoFocus
        />
        <Button
          className={classes.buttonMargin}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={props.closeModal}
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
