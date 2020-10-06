import React from 'react';
import { useState } from 'react';
import TobuyList from './TobuyList';
import TobuyForm from './TobuyForm';

import { Paper, Typography } from '@material-ui/core';

export default function App(){
  const [tobuys, setTobuys] = useState([
    {id: 1, title: "code react", isCompleted: true
  },

  ]);

// Add a tobuy
const addTobuy = (text) => {
  const newTobuy = {
    id: 2, title: text, isCompleted:false
  };
  setTobuys([...tobuys, newTobuy])
}

  return (
    <div>
      <Paper square>
        <Typography  variant="h5">
          My shopping Lists
        </Typography>
      </Paper>
      <TobuyForm addTobuy={addTobuy} />
      <TobuyList tobuys={tobuys} />
    </div>
  )
}