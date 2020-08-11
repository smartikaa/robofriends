import React from 'react';
import 'tachyons';
import './card.css';

function Card({name, id, email}) {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
    </div>
  );
}

export default Card;
