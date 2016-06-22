import React from 'react';

const Screens = ({ project }) => (
  (
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
  )
);


const Description = ({ project }) => (
  (
    <div className="description">
      <div className="title">
        <span>{project.title}</span>
      </div>
      <div className="main">
        {
          project.description.map( (para, i) => <p key={i}>{ para }</p>  )
        }
        <p className="tech">tech used: { project.tech.map(tech => tech + ", ")  }</p>
      </div>
    </div>
  )
)


/*
  A single project component
*/
const Project = ({ project }) => (
  (
    <div className="project">
      <Screens project={project} />
      <Description project={project} />
    </div>

  )
)

export default Project;
