import React from 'react';
import Card from './Card';
import SectionTag from './SectionTag';

/*
  Intro section component.
*/
const Intro = ({ intro }) => (
  (
    <Card>
      <div className="intro">
        <SectionTag text={intro.greeting} />
        {
          intro.paragraphs.map((para,i) => <p key={i}>{para}</p>)
        }
      </div>
    </Card>
  )
);

export default Intro;
