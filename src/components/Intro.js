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
        <div className="intro-text">
        {
          intro.paragraphs.map((para,i) => <p key={i}>{para}</p>)
        }
        </div>
        <img src="#" alt="a monkey in a space suit with code monkey written on his chest"/>
      </div>
    </Card>
  )
);

export default Intro;
