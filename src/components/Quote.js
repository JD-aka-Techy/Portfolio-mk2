import React from 'react';

/*
  Single quote component.
*/
const Quote = ( { quote } ) => (
  (
    <div className="quote" >
        <img src={ quote.image } />
      <blockquote>
        <cite>
          <span>{ quote.name }</span>
          <span>{ quote.role }</span>
        </cite>
        <q>{ quote.review }</q>
      </blockquote>
    </div>
  )
);

export default Quote;
