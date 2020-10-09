import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Container,
  Card,
  CardActions,
  CardContent,
  ButtonBase
} from '@material-ui/core';

import { Check, Delete } from '@material-ui/icons';

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
  CardActions: {
    display: 'block',
    testAlign: 'initial'
  }
}));

export default function List() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>.</span>;
  return (
    <Container className={classes.root}>
      <Card className={bull}>
        <ButtonBase>
          <CardContent>
            {/* Check Icon */}
            <Typography variant="h5" component="h2">
              <IconButton>
                <Check className={classes.check} />
              </IconButton>
        
              <IconButton>
                <Delete className={classes.delete} />
              </IconButton>
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    </Container>
  );
}
