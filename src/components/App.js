import React from 'react';

// components
import Intro from './Intro';
import Work from './Work';
import SkillsDisplay from './SkillsDisplay';
import Quotes from './Quotes';
import SiteFooter from './SiteFooter';
import Hero from './Hero';

/* Temporary data TODO: clean this up*/
import { intro, work, skills, contactInfo, testimonials } from '../data/mainData';

/*
  Main application wrapper
*/
const App = ( ) => (
  (
    <div className="app">
      <Hero />
      <div className="siteWrap">
        <div className="content">
          <Intro intro={intro}/>
          <Work projects={work}/>
          <SkillsDisplay skills={skills} />
          <Quotes quotes={testimonials}/>
        </div>
      <div className="footer-spacer"></div>
      <SiteFooter info={ contactInfo }/>
      </div>
    </div>
  )
);

export default App;
