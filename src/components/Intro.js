import React from 'react';
import Card from './Card';
import SectionTag from './SectionTag';
import Monkey from './Monkey';

/*
  Intro section component.
*/
const Intro = ({ intro }) => (
  (
    <Card>
      <div className="intro">
        <SectionTag text={intro.greeting} />
        <div className="intro-text">
        {
          intro.paragraphs.map((para,i) => <p key={i}>{para}</p>)
        }
        </div>
        <Monkey/>
      </div>
    </Card>
  )
);

export default Intro;
