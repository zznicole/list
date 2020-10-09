import React, { useState } from 'react';
import Lists from './Lists';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  Fab,
} from '@material-ui/core';
import { Menu, Add, Search, More, Check, Delete, SettingsApplicationsSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 20,
  },
  root: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },

  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  check: {
    color: 'green',
  },
}));

export default function TobuyLists() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>.</span>;
  const [lists, setLists] = useState([]);
  // add a List
  const addList = () => {
    console.log('add');
    const newList = [
      {
        id: 1,
        title: 'New List',
        content: 'Tomato, Ice Creams,',
      },
    ];
    setLists(...lists, newList);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5">
          My shopping Lists
        </Typography>
      </Paper>
      <Lists addList={addList} />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <Menu />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <Add onClick={addList} />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <More />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
