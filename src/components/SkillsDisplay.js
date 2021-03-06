import React from 'react';
const { Component } = React;
import Card from './Card';
import SectionTag from './SectionTag';
import Skill from './Skill'
/*
* Represents the experience/skills card
*/
class SkillsDisplay extends Component {

  constructor({ skills }) {
    super();
    this.state = {
      active: 'all',
      skills: skills,
      groups: this.getGroups(skills)
    }

  }

  getGroups(skills) {
    return skills.map( (skill) => skill.groups )
                 .reduce( (a,b) => a.concat(b) )
                 .filter( (value, index, self) => self.indexOf(value) === index );
  }

  changeActive( e ) {
     let selection = e.target.value;
     this.setState({active: selection});
  }

  render() {
    let activeClass = this.state.active;
    return (
      <Card>
        <element  className="nav-anchor" id="skills"></element>
        <ul className="skills-wrap">
          <SectionTag text={"Know-how"} />
          <select onChange={ (e) => this.changeActive(e) }>
            <option >all</option>
            { this.state.groups.map( (group,i) => <option key={i}>{ group }</option> ) }
          </select>
          { this.state.skills.map((skill,i) => (
                <Skill skill={ skill }
                       activeClass={ activeClass }
                       key={i}/>
            )) }
        </ul>
      </Card>
    )
  }
}

export default SkillsDisplay;
