import React from 'react';

/*
*  Represents a Heading with underline.
*  @text is the content of the tag.
*/
const SectionTag = ( {text} ) => (
    (
      <h2 className="section-tag">
        <span> { text } </span>
      </h2>
    )
);

export default SectionTag;
