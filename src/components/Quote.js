import React from 'react';

/*
  Single quote component.
*/
// TODO: add in props
const Quote = ( { name, role, review, image } ) => (
  (
    <div className="quote" >
        <img src="https://unsplash.it/200/200" />
      <blockquote>
        <cite>
          <span>Frankenfurter</span>
          <span>Mad scientist</span>
        </cite>
        <q> He'll do press ups, and chinups, and the snatch, clean and jerk. He thinks dynamic tension Must be hard work. </q>
      </blockquote>
    </div>
  )
);

export default Quote;
