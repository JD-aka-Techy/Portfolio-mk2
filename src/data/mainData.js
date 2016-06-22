/*
  file centralizes data to be fed into Application and adds config
*/
import{ work } from './workData';
import { intro } from './introData';
import { practiceWork } from './practiceData';
import { skills } from './skillData';
import { contactInfo } from './contactData';
import { testimonials } from './testimonialData'

// Links listed in navigation menu
const navLinks = [
  {'name': 'Home', location: '#home' },
  {'name': 'Work', location: '#work' },
  {'name': 'Skills', location: '#skills' },
  {'name': 'Testimonials', location: '#testimonials' },
  {'name': 'Contact', location: '#contact' }
];

// How many full layout projects to display. others will be placed in a slider if there are more than 3 remaining to display.
const fullSizeProjNum = 3;

export default {
  navLinks,
  intro,
  fullSizeProjNum,
  work,
  practiceWork,
  skills,
  contactInfo,
  testimonials
};