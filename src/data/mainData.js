/*
  file contains data to be fed into Application
*/

// Links listed in navigation menu
export const navLinks = [
  {'name': 'Home', location: '#home' },
  {'name': 'Work', location: '#work' },
  {'name': 'Skills', location: '#skills' },
  {'name': 'Testimonials', location: '#testimonials' },
  {'name': 'Contact', location: '#contact' }
];

// introduction text
export const intro = {
  'greeting' : 'Hi there',
  'paragraphs': [
    'I\'m James, a Manchester based Web Developer and all around code monkey doing what I love the most...',
    'Learning, building things',
    ' and Creating high-quality, personalised and responsive applications for mobile and web.'
  ]
};

// How many full layout projects to display. others will be placed in a slider.
export const fullSizeProjNum = 3;

// Work projects
export const work = [
  {
    'title': 'FreeCodeCamp Manchester Website',
    'description': [
      `Home page and Resource sharing website built for the
       FreeCodeCamp Manchester User group.`,
      `Built using React.js, jsx, React-router, Jade, Sass, ES6 and Webpack.`,
      `Initial prototyping was done with bootstrap 4 however It is being phased out
      in favour of native styles`
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': ['#'],
    'uri': '#'
  },
  {
    'title': 'Ebony Feare - Actress Portfolo',
    'description': [
      `A custom WordPress Template designed, built and deployed to
      the clients specifications and preferences.`,
      `The template itself was built from scratch takings queues from several
      example websites and a pallete and layout style chosen by the client.
      `
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': ['#'],
    'uri': '#'
  },
  {
    'title': 'Sheep Knuckle Art & Chat-Room',
    'description': [
      `Consultant and prototype developer for the creation of a Processing.js
      based data visualisation linked to an SQL database fed by a Chat room
      and string parser collating the "emotional intent" of each message.`
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': ['#'],
    'uri': '#'
  },
  {
    'title': 'Appition',
    'description': [
      `Development of a prototype native android application/ social game
       for a Finnish startup.`
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': ['#'],
    'uri': '#'
  }
];

// Practice projects
export const practiceWork = [
  {
    'title': 'boop1',
    'description': [
      `desc`
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      'https://unsplash.it/300/300'
    ],
    'uri': '#'
  },
  {
    'title': 'boop2',
    'description': [
      `desc`
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      'https://unsplash.it/200/300'
    ],
    'uri': '#'
  },
  {
    'title': 'boop3',
    'description': [
      `desc`
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      'https://unsplash.it/200/200'
    ],
    'uri': '#'
  },
];

// skills section skill info
export const skills = [
  { 'skill': 'PHP', 'groups': ['back', 'language'] },
  { 'skill': 'Js', 'groups': ['front','back','language'] },
  { 'skill': 'HTML5', 'groups': ['front', 'language'] },
  { 'skill': 'CSS', 'groups': ['front', 'language'] },
  { 'skill': 'React.js', 'groups': ['front', 'framework'] },
  { 'skill': 'Angular.js', 'groups': ['front', 'framework'] },
  { 'skill': 'Wordpress', 'groups': ['back','front', 'framework'] },
  { 'skill': 'Git', 'groups': ['tool'] },
  { 'skill': 'TDD', 'groups':['tool'] },
  { 'skill': 'Node.js', 'groups':['back'] },
  { 'skill': 'MongoDb', 'groups': ['back'] },
  { 'skill': 'SQL', 'groups': ['back'] },
  { 'skill': 'D3', 'groups': ['front', 'tool', 'framework'] },
  { 'skill': 'Redux', 'groups': ['front', 'framework'] },
  { 'skill': 'JQuery', 'groups': ['front', 'tool'] },
  { 'skill': 'Webpack', 'groups': ['tool'] },
  { 'skill': 'Gulp', 'groups': ['tool'] },
  { 'skill': 'Express', 'groups': ['back'] },
  { 'skill': 'Bootstrap', 'groups': ['front','tool'] }
];

// contact section links
export const contactInfo = [
  { 'text': "LinkedIn", 'link': "https://uk.linkedin.com/in/james-davenport-ba448098" },
  { 'text': "Twitter", 'link': "https://twitter.com/JD_aka_Techy" },
  { 'text': "Github", 'link': "https://github.com/JD-aka-Techy" }
];

// testimoinal information
export const testimonials = [
  {
    'name': 'tempname1',
    'role': 'temprole1',
    'review': 'tempreview1',
    'image': 'tempimage1'
  },
  {
    'name': 'tempname1',
    'role': 'temprole1',
    'review': 'tempreview1',
    'image': 'tempimage1'
  },
  {
    'name': 'tempname1',
    'role': 'temprole1',
    'review': 'tempreview1',
    'image': 'tempimage1'
  },
  {
    'name': 'tempname1',
    'role': 'temprole1',
    'review': 'tempreview1',
    'image': 'tempimage1'
  }
];
