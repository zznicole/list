import React from "react";
import { v4 } from "uuid";
import { useState } from "react";
import TobuyList from "./components/TobuyList";
import TobuyForm from "./components/TobuyForm";

import { Paper, Typography } from "@material-ui/core";
import { TodayOutlined } from "@material-ui/icons";

export default function App() {
  const [tobuys, setTobuys] = useState([]);

  // mark as completed
  const checkTobuy = (id) => {
    console.log(id);
    setTobuys(tobuys.map(tobuy => {
      if(tobuy.id === id) {
        tobuy.isCompleted = !tobuy.isCompleted
      } 
      console.log(tobuy.isCompleted);
      return tobuy;
    }))
  }
  
  //delete a tobuy
  const deleteTobuy =(id) => {
    setTobuys(tobuys.filter(tobuy => tobuy.id !== id ))
  }

  // Add a tobuy
  const addTobuy = (text) => {
    const newTobuy = {
      id: v4(),
      title: text,
      isCompleted: false,
    };
    setTobuys([...tobuys, newTobuy]);
  };

  return (
    <div>
      <Paper square>
        <Typography variant="h5">My shopping Lists</Typography>
      </Paper>
      <TobuyForm addTobuy={addTobuy} />
      <TobuyList tobuys={tobuys} checkTobuy={checkTobuy} deleteTobuy={deleteTobuy} />
    </div>
  );
}
