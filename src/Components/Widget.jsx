import React from 'react';
import "../widget.css";

function Widget(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close" onClick={() => props.setTrigger(false)}>Close</button>
        { props.children }
      </div>
    </div>
  ) : "Trigger it to be true"
}

export default Widget;
