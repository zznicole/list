import React from 'react';

import AppBar from 'materiaL-ui/core/AppBar';
import { makeStyles } from 'material-ui/core/styles';
import CssBaseline from 'material-ui/core/CssBaseline';
import Toolbar from 'material-ui/core/Toolbar';
import Typography from 'material-ui/core/Typography';
import IconButton from 'material-ui/core/IconButton';
import Paper from 'material-ui/core/Paper';
import Fab from 'material-ui/core/Fab';
import List from 'material-ui/core/List';
import ListItem from 'material-ui/core/ListItem';
import ListItemText from 'material-ui/core/ListItemText';
import ListSubheader from 'material-ui/core/ListSubheader';
import MenuIcon from 'material-ui/icons/Menu';
import AddIcon from 'material-ui/icons/Add';
import SearchIcon from 'material-ui/icons/Search';
import MoreIcon from 'material-ui/icons/MoreVert';


let lists = [{
  id: '',
  primary: '',
  secondary: '',
},
];


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
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
}));



export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          My shopping Lists
        </Typography>
        <List className={classes.list}>
          {lists.map(({id, primary, secondary}) => (
            <ListItem button>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  )
}
