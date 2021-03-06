import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'react-router-dom/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({title}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Cipher Site
          </Typography>
          <Button color="inherit" component={Link} to="/cesar">Cesar</Button>
          <Button color="inherit" component={Link} to="/playfair">Playfair</Button>
          <Button color="inherit" component={Link} to="/vigenere">Vigenere</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}