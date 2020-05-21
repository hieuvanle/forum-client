import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, authentication } from "../../redux/auth/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1.5, 0, 1),
    borderRadius: 14,
  },
  centerText: {
    textAlign: "center",
    fontWeight: 300,
  },
}));

function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", user);
      dispatch(setToken(res.data));
      dispatch(authentication());
    } catch (err) {
      console.log(err);
    }
  };

  //Render
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline></CssBaseline>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={user.email}
          onChange={onChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Password"
          value={user.password}
          onChange={onChange}
          name="password"
        />
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign in
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
