import React from 'react';
import SectionTag from './SectionTag';

/*
  single Slide component.
*/
const Slide = ({ index, data }) => (
  (
    <div className={index === 1 ? "slide active" : "slide"}
       style={{'backgroundImage': 'url(' + data.slides[0] + ')'}}>
      { index === 1
      ? <div className="card details">
          <div className="section-tag"><span>{ data.title }</span></div>
          <p>
            { data.description }
            <a href={ data.uri } > more...</a>
          </p>
        </div>
      : '' }
    </div>
  )
);

export default Slide;
