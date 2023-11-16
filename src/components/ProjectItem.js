import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3 key={name}>{name}</h3>
      <p key={about}>{about}</p>
      <div className="technologies" key={technologies}>
        
        <span key={projects.id}>{technologies}</span>
        {/* render a <span> for each technology in the technologies array */
      <span>{technologies}</span>
        }
      </div>
    </div>
  );
}

export default ProjectItem;
