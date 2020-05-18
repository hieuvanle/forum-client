import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  buttonMargin: {
    margin: theme.spacing(1, 0, 2),
  },
}));

function LoginForm(props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline></CssBaseline>
      <Typography component="h1" variant="h5">
        Create your account
      </Typography>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Password"
          name="password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          labelPlacement="end"
          label="I accept the Terms of Use & Private Policy"
          className={classes.removePadding}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.buttonMargin}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={props.closeModal}>
              Already a member? Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default LoginForm;
