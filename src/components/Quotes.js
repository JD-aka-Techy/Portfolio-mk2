import React from 'react';
const { Component } = React;
import Quote from './Quote';

/*
  throttle function for performance - underscore.js -
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

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  updateDimensions() {
    let newWidth = window.innerWidth;
    this.setState({ width: newWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", throttle( () => this.updateDimensions(), 500));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateDimensions() );
  }


  render() {

    let width = this.state.width,
        nums = (width > 900 && width < 1200)
               ? 3 : 4;

    return (
      <div className="card-content-wrap">
        {
          this.props.quotes.slice(0,nums)
                    .map((quote, i) => <Quote key={i} quote={quote}/>)
        }
      </div>
    )
  }
}

export default Quotes;
