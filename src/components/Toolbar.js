import React from "react";

function Toolbar(props) {
  return (
    <div className="app-filters">
      {props.filters.map((item) => (
        <button
          onClick={() => props.onSelectFilter(item)}
          className="item-filters"
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
