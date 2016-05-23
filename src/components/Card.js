import React from 'react';

/*
  Card wrapper component
*/
const Card = ( {children} ) => (
  (
    <div className="card">
      { children }
    </div>
  )
);

export default Card;
