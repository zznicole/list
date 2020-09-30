import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Typography, IconButton, Paper, Fab, Container, Card, CardActions, CardContent, Button }from '@material-ui/core';
import { Menu, Add, Search, More, Check, Delete} from '@material-ui/icons';

let lists = [{
  id: '1',
  primary: 'Create a new list.',
  secondary: '',
},
{
  id: '2',
  primary: 'Second',
  secondary: 'gdaer-g]aerg',
},
];


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
  }
}));



export default function BottomAppBar() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>.</span>;
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" >
          My shopping Lists
        </Typography>
        
      </Paper>
      <Container className={classes.root}>
        <Card  className={bull}>
          <CardContent>
            {/* Check Icon */}
            <Typography variant="h5" component="h2"> 
             <IconButton>
               <Check className={classes.check} />
             </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <Menu />
            </IconButton>
             {/* Add Icon */}
            <Fab color="secondary" aria-label="add" className={classes.fabButton}> 
              <Add />
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
