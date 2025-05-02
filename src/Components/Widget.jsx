import React from 'react';
import "../widget.css";

function Widget(props) {
  // The parameter "props" is an object that can be destructured to retrieve all of the property values of each prop
  // The values for each prop will be entered when component is used

  // if props.trigger === true dipslay the widget, otherwise display string
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* When close button is clicked, setTrigger === false and widget will not be displayed */}
        <button className="close" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {/* props.children will access anything placed inside of a component and display it */}
        {props.children}
      </div>
    </div>
  ) : (
    "Widget trigger is set to false"
  );
}

export default Widget;
