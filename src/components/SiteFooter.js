import React from 'react';

/*
* Represents the site footer
*/
const SiteFooter = ( { info }) => (
  (
    <div className="site-footer">
      <ul>
        { info.map( (link) => <li><a href={ link.link }>{ link.text }</a></li> ) }
      </ul>
    </div>
  )
);

export default SiteFooter;