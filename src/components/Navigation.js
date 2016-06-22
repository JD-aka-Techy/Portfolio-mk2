import React from 'react';
const { Component } = React;

/*
  single list item
*/
const NavLink = ({ link, onClick}) => (
  (
    <li>
      <a href={link.location}
        onClick={ onClick }
        >{link.name}</a>
    </li>
  )
)

/*
  Site navigation component
*/
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleNav() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const open = this.state.open;
    return (
      <nav className="main-navigation">
        <ul className={ open ? "nav-bar nav-open" : "nav-bar"}>
          {
            this.props.links.map((link, i) => <NavLink key={i} link={link} onClick={ () => this.toggleNav() }/>)
          }
        </ul>
        <div className="nav-toggle"
             onClick={ () => this.toggleNav() }>
          MENU
        </div>
      </nav>
    )
  }
}

export default Nav;
