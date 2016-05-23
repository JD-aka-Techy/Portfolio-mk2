import React from 'react';
const { Component } = React;
import Quote from './Quote';

/*
  throttle function for performance
*/
const throttle = function(func, wait) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    var options = {};
    var later = function() {
      previous = Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = Date.now();
      if (!previous) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
};

/*
  Quotes section component.
*/
class Quotes extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  updateDimensions() {
    let newWidth = window.innerWidth;
    this.setState({ width: newWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", throttle(this.updateDimensions.bind(this), 500));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  render() {

    let width = this.state.width,
        nums = (width > 900 && width < 1200)
               ? 3 : 4;
    return (
      <div className="card-content-wrap">
        {
          //Array(nums).fill(0).map( (i) => <Quote /> )
          Array.apply(null, {length: nums}).map((i) => <Quote />)
        }
      </div>
    )
  }
}

export default Quotes;
