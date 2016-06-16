import React from 'react';

/*
  A single project component
*/
const Project = ({ project }) => (
  (
    <div className="project">
      <div className="screen-wrap">
        <div className="screens">
          <div className="screen-l"
               style={{'background': `url(${project.deskimg})`}}>
          </div>
          <div className="screen-m"
              style={{'background': `url(${project.tabimg})`}}>
          </div>
          <div className="screen-s"
               style={{'background': `url(${project.mobimg})`}}>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="title">
          <span>{project.title}</span>
        </div>
        <div className="main">
          { project.description }
        </div>
      </div>
    </div>
  )
);

export default Project;
