import React from 'react';
import { Container, Card, Typography, IconButton } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';


export default function Tobuy() {
  return (
    <div>
  
      <Container>
        <Typography variant="h5" component="h2">
        <Card variant="outlined" style={{ marginTop: 35 }}>
          <IconButton>
            <Check style={{ color: "green" }} />
          </IconButton>
          
          <IconButton>
            <Delete style={{ color: "red" }} />
          </IconButton>
        </Card>
        </Typography>
      </Container>
    </div>
  )
}

