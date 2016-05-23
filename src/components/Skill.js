import React from 'react';

/*
* Represents a single skill list item in a skill display.
*/
const Skill = ({ skill, activeClass, i }) => (
  (
    <li
      className={ skill.groups.indexOf(activeClass) >= 0 || activeClass == 'all' ? 'active' : '' } >
      {skill.skill}
    </li>
  )
);

export default Skill;
