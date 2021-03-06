import React from 'react';

/*
* Represents the site footer
*/
const SiteFooter = ( { info }) => (
  (
    <div className="site-footer">
      <element  className="nav-anchor" id="contact"></element>
      <ul>
        { info.map( (link, i) => <li key={i}><a href={ link.link }>{ link.text }</a></li> ) }
      </ul>
    </div>
  )
);

export default SiteFooter;
