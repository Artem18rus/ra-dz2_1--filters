import React from "react";

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="app-filters">
      {filters.map((item) => (
        <button
          onClick={() => onSelectFilter(item)}
          className={`item-filters ${
            selected === item
          } ? 'filter-selected' : '' `}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
