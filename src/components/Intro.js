import React from 'react';
import Card from './Card';
import SectionTag from './SectionTag';

/*
  Intro section component.
*/
const Intro = () => (
  (
    <Card>
      <div className="intro">
        <SectionTag text={"Hi there"} />
        <p>I'm James, a Manchester based Web Developer and all around code monkey doing what I love the most...</p>
        <p>Creating high-quality, personalised and responsive applications for mobile and web.</p>
      </div>
    </Card>
  )
);

export default Intro;
