import React from 'react';
import Project from './Project';
import SectionTag from './SectionTag';
import Card from './Card'
/*
* Represents Work card
*/
const Work = ({ projects }) => (
  (
    <Card>
      <element  className="nav-anchor" id="work"></element>
      <div className="work">
        <SectionTag text={"Work"}/>
        {
          projects.map( (project, i) => <Project key={i} project={ project }/>)
        }


      </div>
    </Card>
  )
);

export default Work;
