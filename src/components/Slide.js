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
          <div>
            { data.description.map( (para, i) => <p ke={i}>{para}</p>) }
            <p className="tech">
            tech used: { data.tech.map( (tech,i) => <span key={i}>{ tech }</span>) }
            </p>
            <a href={ data.uri } > more...</a>
          </div>
        </div>
      : '' }
    </div>
  )
);

export default Slide;
