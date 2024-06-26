import React from 'react';
import Card from './Card';

const CardList = ({ robot }) => {
  // if (true) {
  //   throw new Error('NOOOOOOOO!');
  // }
  return (
    <div>
      {
        robot.map((username, i) => {
          return (
            <Card 
            key={i} 
            id={robot[i].id} 
            name={robot[i].name} 
            email={robot[i].email} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;