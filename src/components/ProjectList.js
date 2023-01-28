import React from "react";

class ProjectList extends React.Component {
  render() {
    return (
      <ul className="app-projects">
        {this.props.projectsOption.map((item, idx) => (
          <li className="item-projects" key={idx}>
            <img src={item.img} alt="projects" />
          </li>
        ))}
      </ul>
    );
  }
}

export default ProjectList;
