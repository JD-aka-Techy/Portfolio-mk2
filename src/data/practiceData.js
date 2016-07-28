// Practice projects
export const practiceWork = [
  {
    'title': 'Simple JQuery Calculator',
    'description': [
      `A simple Material design enspired JavaScript Calculator.`,
      `While the code behind this project is extremely simple and not exactly ideal
      (use of eval for the calculations) it gave me the opportunity to experiment with material design and some more complex gradient techniques
      for an interesting final look.`
    ],
    'tech': [
      'Javascript', 'JQuery', ' Sass', 'HTML5'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/calc-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/bdzqRK'
  },
  {
    'title': 'A Rogue-Like Dungeon Crawler',
    'description': [
      `A React-Redux based Dungeon Crawler game with a leaning toward using immutible data structures and pure functions.`,
      `I used this project as a vehicle to practice Reacts Redux library and its use in more complex state management and to 
      gain more experience with functional programming standards.`,
      `It has since become something of a pet project that I add features to and re-factor when the mood strikes. As such
      it now sports a separate level builder.`
    ],
    'tech': [
      'Jade/Pug', 'Sass', 'React.js', 'Redux'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/dcrawler-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/zqQYBE/'
  },
  {
    'title': 'Doping in Professional Cycleing',
    'description': [
      `A scatter chart built with D3 to display the times and details of the top professional cyclist
      and information on wether or not they have been implicated in doping scandals during or after their careers.`,
      `While not enormously complex to assemble this was one of my earlier forays into D3 data visualisation and as such
      I feel it was a valuable learning experience.`
    ],
    'tech': [
      'Javascript', 'D3', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/dope-d3-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/MyNZEv/'
  },
  {
    'title': 'State Contiguity',
    'description': [
      `A force directed graph written with D3 to show contiguity of each nation in the world (border links).`,
      `D3's force directed graph api is slightly more complex than visualisations I had done before, mapping
      data nodes together with link information.`,
      `The flags are applied via css classes altering background positions on the same sprite sheet, a technique I have used 
      before and since to compress asset weight on page load.`
    ],
    'tech': [
      'Javascript', 'D3', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/flags-d3-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/PzYyVj/'
  },
  {
    'title': 'U.S Quarterly GDP',
    'description': [
      `A d3 bar Chart showing U.S gross domestic product growth.`,
      `My first use of D3 gave me the opportunity to learn useful standards for canvas creation with d3's dynamic scales and axis.`
    ],
    'tech': [
      'Javascript', 'D3', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/gdp-d3-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/eZoBxv/'
  },
  {
    'title': 'Conways Game of Life',
    'description': [
      `Conways Game of Life is a simple cell/life growth simulation devised by British mathematician John Conway.`,
      `This implementaion is built with React.js using simple vector addition to calculate the number of neighbours each cell has.`,
      `The visuals and logic behind the game are relatively simple so I took it as an opportunity to experiment with Jasmine and Test Driven development
      pushing for purer functions that are more easily testable.`
    ],
    'tech': [
      'Javascript', 'React', 'Jade/Pug', 'Sass', 'Jasmine'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/gol-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/BKPqvP/'
  },{
    'title': 'FreeCodeCamp LeaderBoard',
    'description': [
      `Consuming two rest Api's using javscripts Promise api this sortable LeaderBoard
      displays FreeCodeCamp users by points made in the last 30 days and all time.`,
      `My second React app this was also quite simple but allowed for more complex list
      manipulation and more complex handler methods.`
    ],
    'tech': [
      'Javascript', 'React', 'Jade/Pug', 'Sass', 'Bootstrap'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/leader-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/bEZXZW/'
  },{
    'title': 'MarkDown previewer',
    'description': [
      `A previewer for writing GitHub style markdown`,
      `This is quite a simple app but made for a good first step into using React`
    ],
    'tech': [
      'Javascript', 'React', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/markdon-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/qbyaBm/'
  },{
    'title': 'Meteor strikes across the globe',
    'description': [
      `This is a D3 render of the earth taken from geoJSON datausing D3's path and projection mothods.`,
      `Each point rendered is taken from a second JSON file and is dynamically placed and sized based on that data.`,
      `This was a much more complex app but I feel it is a great example of what can be achieved with D3 with
      very little code.`
    ],
    'tech': [
      'Javascript', 'D3', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/meteor-d3-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/YWKqjG/'
  },{
    'title': 'Camper News',
    'description': [
      `This is my implementation of the FreeCodeCamp Camper news data taken from a now unfortunately discontinued api.`,
      `I completed this application in two versions, the first using plain Jquery and later on using Angular.js`,
      `while this was good learning experience for my use of angular it also left me using two different approaches to the masonry 
      style card layout; using Masonry.js with JQuery and css's columns for the angular version.`
    ],
    'tech': [
      'Javascript', 'Angular', 'Jade/Pug', 'Sass', 'JQuery', 'Masonry.js'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/news-slide.jpg'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/pJmrQV/'
  },{
    'title': 'Random Quote Generator',
    'description': [
      `This project uses a simple REST API call to grab a random quote from an extremely simple PHP json server written specifically for this project.`,
      `The fade out and in effect is achieved using JQuerys animated methods and a rather simple application of promises to assure the timing was right.`
    ],
    'tech': [
      'Javascript', 'Jade/Pug', 'Sass', 'JQuery', 'PHP', 'Bootstrap'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/quote-gen-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/oXJpvL/'
  },{
    'title': 'Recipe Box',
    'description': [
      `A React based Recipe Box application using local browser memory.`,
      `A further experiment in material design with a greater focus on cards layouts and on gradients of varying opacities
      giving a filtered look to the background image.`,
      `Which recipes are open and or editable is controlled via the components state so that the user will find the application 
      as they left it upon later visits.`
    ],
    'tech': [
      'Javascript', 'React', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/recipe-box-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/KVELrJ/'
  },{
    'title': 'Simon',
    'description': [
      `The Classic game of Simon with two difficulty modes and increasing tempo.`
    ],
    'tech': [
      'Javascript', 'JQuery', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/simon-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/http://codepen.io/JD-aka-Techy/bdzqRK/vNjzjd/'
  },{
    'title': 'D3 Heat Map',
    'description': [
      `A D3 Heat map showing average monthly global land surface temperatures.`
    ],
    'tech': [
      'Javascript', 'D3', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/temps-d3-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/pbzboY/'
  },{
    'title': 'Tic-Tac-Toe',
    'description': [
      `An unbeatable Game of Noughts and Crosses.`,
      `This was an interesting task as I took it upon myself to implement a Recursive minimax algorithm
      for the AI player.`
    ],
    'tech': [
      'Javascript', 'JQuery', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/tic-tac-toe-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/GooMGR/'
  },{
    'title': 'Twich JSON Api',
    'description': [
      `A Twitch Api app built using angular.js. This was Quite simple to implement but required 
      an understanding of service factorys and their uses in angular and JSONP as a workaround for 
      CORS issues.`
    ],
    'tech': [
      'Javascript', 'Angular', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/twitch-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/RPOXNb/'
  },{
    'title': 'Local Weather App',
    'description': [
      `A simple Weather application using an IP address location service and a weather api.`,
      `It uses several helper functions for temperature conversions, icon and wind direction lookups.`
    ],
    'tech': [
      'Javascript', 'JQuery', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/weather-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/xGBbyZ/'
  },{
    'title': 'WikiPeak',
    'description': [
      `A Search App for the wikipedia api.`,
      `Consuming the wiki api was quite challengeing at first but I feel with the 
      autocomplete functionality this makes for a neat little application.`
    ],
    'tech': [
      'Javascript', 'JQuery', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/wiki-slide.png'
    ],
    'uri': 'http://codepen.io/JD-aka-Techy/pen/OMJPwb/'
  }
  
];

/*
{
    'title': '',
    'description': [
      ``
    ],
    'tech': [
      'Javascript', 'React', 'Jade/Pug', 'Sass'
    ],
    'deskimg': '#',
    'tabimg': '#',
    'mobimg': '#',
    'slides': [
      './assets/practiceimg/leader-slide.png'
    ],
    'uri': ''
  },
*/