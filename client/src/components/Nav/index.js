import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

function Nav() {
  return (

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className= "iconbutton" color="inherit" aria-label="menu">
      <MenuIcon/>
    </IconButton>
    <Typography variant="h6" className="iconbutton">
      GitHire
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
  )}

export default Nav;
