import React, { useState } from 'react';

function Problem1() {
  const [bgcolor, setBgColor] = useState(true);

  return (
    <div>
      {/* Toggle Button
      Problem:
      Create a button that toggles text between "ON" and "OFF" when clicked.
      Bonus:
      Change the button's background color based on the state (e.g., green for "ON" and red for "OFF"). */}
      <button
        style={{ backgroundColor: bgcolor ? 'green' : 'red'}}
        onClick={() => setBgColor(!bgcolor)}
      >
        {bgcolor ? 'ON' : 'OFF'} Background Color
      </button>
    </div>
  );
}

export default Problem1;
