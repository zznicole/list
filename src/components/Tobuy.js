import React from 'react';
import { Paper, Container, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';


export default function Tobuy() {
  return (
    <div>
      <Paper square >
        <Typography  variant="h5" >
          My shopping Lists
        </Typography>
        
      </Paper>
      <Container>
        <Typography variant="h5" component="h2">
        <Card variant="outlined" style={{ marginTop: 35 }}>
          <IconButton>
            <Check style={{ color: "green" }} />
          </IconButton>
          To buy 1
          <IconButton>
            <Delete style={{ color: "red" }} />
          </IconButton>
        </Card>
        </Typography>
      </Container>
    </div>
  )
}

