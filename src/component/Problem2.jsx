import React, { useState } from 'react';

function Problem2() {
  const [para, setPara] = useState(true);

  return (
    <>
      {/* Show/Hide Component
      Problem:
      Create a button that toggles the visibility of a paragraph.
      Clicking "Show" displays the paragraph; clicking "Hide" hides it. */}
      <button onClick={() => setPara(!para)}>
        {para ? "Hide" : "Show"} Paragraph
      </button>
      {para && <h2>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>}
    </>
  );
}

export default Problem2;
