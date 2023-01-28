import "./css/App.css";
import Toolbar from "./components/Toolbar";
import ProjectList from "./components/ProjectList";
import projects from "./other/listOfProjects";
import React, { useState } from "react";

function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  let [selected, setSelected] = useState("All");
  let [projectsOption, setProjects] = useState(projects);

  const onSelectFilter = (e) => {
    setSelected(e);
    selected = e;

    let selectedClickNode = document.querySelectorAll(".item-filters");

    let optionFilter;
    for (let i = 0; i < selectedClickNode.length; i += 1) {
      if (selectedClickNode[i].innerText === selected) {
        let activeEl = document.querySelector(".active-filter");
        if (activeEl !== null) {
          activeEl.classList.remove("active-filter");
        }
        optionFilter = selectedClickNode[i];
        optionFilter.classList.add("active-filter");
      }
    }

    if (selected === "All") {
      setProjects(projects);
      projectsOption = projects;
    } else {
      let same = projects.filter((filter) => {
        return filter.category === selected;
      });
      setProjects(same);
      projectsOption = same;
    }
  };

  return (
    <div className="container">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projectsOption={projectsOption} />
    </div>
  );
}

export default Portfolio;
