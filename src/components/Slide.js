import React from 'react';
const { Component } = React;



const Info = ({ data }) => (
  (
    <div className="card details description">
      <div className="title"><span>{ data.title }</span></div>
      <div className="main">
        { data.description.map( (para, i) => <p ke={i}>{para}</p>) }
        <p className="tech">
          tech used: { data.tech.map( (tech,i) => <span key={i}>{ tech }, </span>) }
        </p>
        <a href={ data.uri } > see the code...</a>
      </div>
    </div>
  )
);



/*
  single Slide component.
*/
class Slide extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      info: false
    };
  }
  
  handleInfoOpen() {
    this.setState({
      info: !this.state.info
    });
  }
  
  render() {
    const isActive = this.props.index === 1;
    const isOpen = this.state.info;
    const data = this.props.data;
    return (
      (
        <div className={ isActive ? "slide active" : "slide"}
             style={{'backgroundImage': 'url(' + data.slides[0] + ')'}}>
          { isActive && isOpen && <Info data={data} /> }
          { isActive && <element className="info-toggle"
                                 onClick={ () => this.handleInfoOpen() }>
                          { isOpen ? 'X' : 'i'}
                        </element> }
        </div>
      )
    );
  }
}

export default Slide;
