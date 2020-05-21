import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import TransitionsModal from "../subComponents/RegisterModal";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    border: "2px solid",
    borderRadius: 12,
  },
  title: {
    flexGrow: 1,
  },
  removePadding: {
    padding: 0,
  },
}));

function NavBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const authState = useSelector((state) => state.authState);

  //Modal
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClick = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.theme}>
        <Container fixed>
          <Toolbar className={classes.removePadding}>
            <Typography variant="h4" className={classes.title}>
              Forum
            </Typography>
            {authState.isAuth ? (
              <div>
                <IconButton onClick={handleMenu} color="inherit">
                  <AccountCircle />
                </IconButton>
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
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Account</MenuItem>
                  <MenuItem onClick={onClick}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <TransitionsModal />
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
