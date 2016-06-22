import React from 'react';
import Project from './Project';
import SectionTag from './SectionTag';
import Card from './Card';
import Slider from './Slider';

/*
* Represents Work card
*/
const Work = ({ projects, fullSizeProjNum, practiceWork }) => (
  (
    <Card>
      <element  className="nav-anchor" id="work"></element>
      <div className="work">
        <SectionTag text={"Work"}/>
        {
          projects.slice(0,fullSizeProjNum).map( (project, i) => <Project key={i} project={ project }/>)
        }
        {
          projects.slice(fullSizeProjNum).length > 2 &&
          (<div>
            <SectionTag text={"More Work..."}/>
            <Slider slides={projects.slice(fullSizeProjNum)}/>
          </div>)
        }
        <SectionTag text={"Other Projects..."}/>
        <Slider slides={practiceWork}/>
      </div>
    </Card>
  )
);

export default Work;
