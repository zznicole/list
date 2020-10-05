import React from 'react';
import { useState } from 'react';
import { FormControl, Container, TextField, Button } from '@material-ui/core';  

export default function TobuyForm() {
  const [text, setText] = useState("");
 
  return (
    <Container>
      <form fullWidth={true} style={{marginTop:"16",}}>
        <FormControl fullWidth={true}>
          <TextField label="Type here" required={true} />
          <Button variant="contained" backgroundColor="scondary" type="submit" style={{ marginTop: 5
          }}>Add</Button>
        </FormControl>
      </form>
    </Container>
  )
}

