import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  for (const project of projects){
    return (project.name)
    console.log(projects);
    }
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" >{
        <ProjectItem projects= {projects.id}/>
      }</div>
    </div>
  );
  


}

export default ProjectList;
