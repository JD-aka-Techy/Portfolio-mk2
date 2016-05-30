import React from 'react';

/*
  Single quote component.
*/
const Quote = ( { name, role, review, image } ) => (
  (
    <div className="quote" >
        <img src={ image } />
      <blockquote>
        <cite>
          <span>{ name }</span>
          <span>{ role }</span>
        </cite>
        <q>{ review }</q>
      </blockquote>
    </div>
  )
);

export default Quote;
