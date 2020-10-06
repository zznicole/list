import React, { useState } from "react";
import { FormControl, Container, TextField, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

export default function TobuyForm({ addTobuy }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTobuy(text);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField id="outlined-basic" label="Type here" required={true} value={text} onChange={(e)=>setText(e.target.value)} />
          <Fab
            variant="round"
            color="secondary"
            type="submit"
            aria-label="add"
            style={{ marginTop: 5 }}
          >
            <AddIcon />
          </Fab>
        </FormControl>
      </form>
    </Container>
  );
}
