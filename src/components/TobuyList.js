import React, { useState } from 'react';
import Tobuy from './Tobuy';
import TobuyForm from './TobuyForm';

export default function TobuyList(){
  const [tobuys, setTobuys] = useState([
    {id: 0, title: "", isCompleted: "Boolean"
  },

  ]);

// Add a tobuy
const addTobuy = () => {
  console.log("add");
}

  return (
    <Reactfragment>
      <TobuyForm addTobuy={addTobuy} />
      <Tobuy tobuys={tobuys}/>
    </Reactfragment>
  )
}