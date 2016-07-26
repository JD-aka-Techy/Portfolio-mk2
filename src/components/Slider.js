import React from 'react';
const { Component } = React;
import Slide from './Slide';

/*
  Slider component.
*/
class Slider extends Component {

  constructor(props) {
    super(props);
    this.sliderLength = this.props.slides.length;
    this.state = {
      slides: this.props.slides.sort(() => 0.5 - Math.random())
    };
  }

  shuffleSlides(dir) {
    let currSlides = this.state.slides;
    let end = dir === 'r'
              ? [currSlides.pop()]
              : currSlides.splice(1, this.sliderLength);
    this.setState({ slides: [...end, ...currSlides] });
  }

  render() {
    return (
      <div className="slider-wrap">
        <div className="slider">
          <div className="left"
               onClick={() => this.shuffleSlides('l')}>{'<'}</div>
          <div className="right"
               onClick={() => this.shuffleSlides('r')}>{'>'}</div>
          {
          this.state.slides
            .slice(0,3)
            .map( (slide, index) =>  <Slide key={index} index={index} data={slide} /> )
          }
        </div>
      </div>
    )
  }
}

export default Slider;
