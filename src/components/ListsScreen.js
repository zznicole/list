import React from 'react';
import { v4 } from 'uuid';
import { useState } from 'react';
import Lists from './Lists';

import { Paper, Typography } from '@material-ui/core';

export default function ListScreen() {
  const [lists, setLists] = useState([
    {id: v4(),
      title: "list one",
      isCompleted: false},
      
  ]);

  // mark as completed
  const checkList = (id) => {
    console.log(id);
    setLists(
      lists.map((list) => {
        if (list.id === id) {
          list.isCompleted = !list.isCompleted;
        }
        console.log(list.isCompleted);
        return list;
      }),
    );
  };
   
  //delete a list
  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  // Add a list
  const addList = () => {
    const newList = {
      id: v4(),
      title: "New list",
      isCompleted: false,
    };
    setLists([...lists, newList]);
  };

  return (
    <div>
      <Paper square>
        <Typography variant="h5" align="center">My shopping lists</Typography>
      </Paper>
      <Lists
        lists={lists}
        checkL={checkList}
        deleteList={deleteList}
      />
    </div>
  );
}

