import React from 'react';
import Tobuy from './Tobuy';

export default function TobuyList({ tobuys, checkTobuy }) {
  return (
    <div>
      {tobuys.map((tobuy) => (
        <Tobuy
          key={tobuy.id}
          title={tobuy.title}
          checkTobuy={checkTobuy}
          id={tobuy.id}
          isCompleted={tobuy.isCompleted}
        />
      ))}
    </div>
  );
}
