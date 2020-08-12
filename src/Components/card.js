import React from 'react';
import 'tachyons';
import './card.css';

function Card({name, id, email}) {
  return (
    <div className='tc card-box dib br3 ma3 grow'>
	    <img className='card-img' alt='robot' src={`https://robohash.org/${id}?100x100`} />
	    <div>
	      <h1 className='card-name'>{name}</h1>
	      <p className='card-email'>{email}</p>
	    </div>
    </div>
  );
}

export default Card;
