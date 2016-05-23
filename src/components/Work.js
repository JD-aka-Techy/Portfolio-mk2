import React from 'react';
import Project from './Project';
import SectionTag from './SectionTag';
import Card from './Card'
/*
* Represents Work card
*/
const Work = () => (
  (
    <Card>
      <div className="work">
        <SectionTag text={"Work"}/>
        <Project />
        <Project />
      </div>
    </Card>
  )
);

export default Work;
