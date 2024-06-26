import React from 'react';
import '../index.css';

const Card = ({ name, email, id }) => {
  return(
    <div className='tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?150x150`} alt='robo'/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;