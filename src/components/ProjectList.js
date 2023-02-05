import React from "react";

function ProjectList({ projectsOption }) {
  return (
    <ul className="app-projects">
      {projectsOption.map((item, idx) => (
        <li className="item-projects" key={idx}>
          <img src={item.img} alt="projects" />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
